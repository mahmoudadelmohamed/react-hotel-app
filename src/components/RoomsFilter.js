import React, { Component } from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  let hero = items.map(item => item[value]);
  return [...new Set(items.map(item => item[value]))];
};
export default class RoomsFilter extends Component {
  static contextType = RoomContext;
  render() {
    let unique = getUnique(this.props.rooms, "type");
    let allUnique = ["all", ...unique];
    let types = allUnique.map((item, index) => {
      console.log(item);
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    const {
      handleChange,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.context;
    let people = getUnique(this.props.rooms, "capacity");
    people = people.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/*select type*/}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={handleChange}
              className="form-control"
            >
              {types}
            </select>
          </div>
          {/*end select type*/}
          {/*guests*/}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              onChange={handleChange}
              className="form-control"
            >
              {people}
            </select>
          </div>
          {/*end guests*/}
          {/*room price*/}
          <div className="form-group">
            <label htmlFor="peice">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/*end room price*/}
          {/*size*/}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/*end size*/}
          {/*extras*/}
          <div className="form-group">
            <div className="single-extra">
               <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
               <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
               <input type="checkbox" name="pets" id="pets"checked={pets} onChange={handleChange} />
               <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/*end extras*/}
        </form>
      </section>
    );
  }
}
