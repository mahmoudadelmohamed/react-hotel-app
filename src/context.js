import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms:[],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }
  getData = async () => {
    try {
       let response = await Client.getEntries({
         content_type: 'hotelApp',
         order: 'fields.price'
       })
       let rooms = this.formateData(response.items);
       let featured = rooms.filter(room => room.featured);
       let maxPrice = Math.max(...rooms.map(item => item.price))
       let maxSize = Math.max(...rooms.map(item => item.size))
       this.setState({
         rooms,
         featuredRooms: featured,
         sortedRooms: rooms,
         loading: false,
         price: maxPrice,
         maxPrice,
         maxSize
       })

    } catch (e) {
      console.log(e);
    }
  }



  componentDidMount() {
    this.getData()
  }
  formateData(items) {
    let tempItems = items.map(items => {
      let id = items.sys.id;
      let name = items.fields.name;
      let images = items.fields.images.map(image => image.fields.file.url);
      let room = {...items.fields, images, id};
      return room;
    })
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];

    let room = tempRoom.find(room => room.slug === slug)
    return room;
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    },
    this.filterRooms
  );
};
  filterRooms = () => {
    const { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
    let tempRooms = [...rooms];

    // filter by type
    if(type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if(capacity !== 1) {
       tempRooms = tempRooms.filter(room => room.capacity > capacity);
      // console.log(filteringRoom);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price < price);

    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    // change state

    // filter by breakfast
    if(breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast);
    }
    // filter by pets
    if(pets) {
      tempRooms = tempRooms.filter(room => room.pets);
    }
    this.setState({
      sortedRooms: tempRooms
    })


  }
  render() {
    return (
       <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
        { this.props.children }
       </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export {RoomProvider, RoomConsumer, RoomContext};
