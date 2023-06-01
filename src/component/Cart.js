import React from "react";
import { itemData } from "../data";
import "../App.css"



const Header = () => {
    return (
      <header className="header">
        <h2>Your Pokemon Tracker</h2>
      </header>
    );
  };



export const Carts = () => {
    return (
      <>
        <Header />
        <div className="stock-container">
          {itemData.map((data, key) => {
            return (
              <div key={key}>
                <Cart
                  key={key}
                  name={data.name}
                  type={data.type}
                  stage={data.stage}
                  evolutions={data.evolutions}
                  hp={data.hp}
                  weaknesses={data.weaknesses}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const Cart = ({ name, type, stage, evolutions, hp, weaknesses }) => {
    if (!name) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h5>{type}</h5>
            </td>
            <td>
              <h4>{stage}</h4>
            </td>
            <td>
              <p>{evolutions}</p>
            </td>
            <td>
              <p>{hp}</p>
            </td>
            <td>
              <p>{weaknesses}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
