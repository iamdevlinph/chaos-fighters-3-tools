/* global fetch */

import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import currenctList from './currency.json';

class VipPage extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
      conversion: 1,
    };
  }

  calculateAmount = (vipScore, conversion) => {
    const calc = (vipScore / 60) * conversion;
    return calc.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };

  getConversion = async currency => {
    await fetch(
      `https://free.currconv.com/api/v7/convert?apiKey=dd951421d14c5f348ca0&q=USD_${currency}&compact=y`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          conversion: data[Object.keys(data)[0]].val,
        });
      })
      .catch(error => console.error(error));
  };

  onCoversionChange = obj => {
    this.setState({
      currency: obj.target.value,
    });
    this.getConversion(obj.target.value);
  };

  render() {
    const { currency, conversion } = this.state;
    // const allCurrencies = _.map(currenctList, cur => {
    //   return (
    //     <option value={cur.id} key={cur.id}>
    //       {`${cur.id} (${cur.currencyName})`}
    //     </option>
    //   );
    // });
    const allCurrencies = _.orderBy(currenctList, [cur => cur.id], ['asc']).map(
      cur => {
        return (
          <option value={cur.id} key={cur.id}>
            {`${cur.id} (${cur.currencyName})`}
          </option>
        );
      }
    );
    return (
      <>
        <div className="page-title">VIP Levels</div>
        <p>Note: 60 VIP Score = 1 USD</p>
        <div>
          <span>Currency </span>
          <CurrencyDropdown
            onChange={this.onCoversionChange}
            defaultValue="USD"
          >
            {allCurrencies}
          </CurrencyDropdown>
          {/* <ConvertBtn
            base="#009C1A"
            active="#00C621"
            type="button"
            onClick={() => this.getConversion(currency)}
          >
            Convert
          </ConvertBtn> */}
        </div>
        <VipTable>
          <thead>
            <tr>
              <th>VIP Level</th>
              <th>VIP Score</th>
              <th>
                Amount
                <br />({currency})
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>60</td>
              <td>{this.calculateAmount(60, conversion)}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>300</td>
              <td>{this.calculateAmount(300, conversion)}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>500</td>
              <td>{this.calculateAmount(500, conversion)}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1000</td>
              <td>{this.calculateAmount(1000, conversion)}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2000</td>
              <td>{this.calculateAmount(2000, conversion)}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>4000</td>
              <td>{this.calculateAmount(4000, conversion)}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>6000</td>
              <td>{this.calculateAmount(6000, conversion)}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>10000</td>
              <td>{this.calculateAmount(10000, conversion)}</td>
            </tr>
            <tr>
              <td>9</td>
              <td>18000</td>
              <td>{this.calculateAmount(18000, conversion)}</td>
            </tr>
            <tr>
              <td>10</td>
              <td>29000</td>
              <td>{this.calculateAmount(29000, conversion)}</td>
            </tr>
            <tr>
              <td>11</td>
              <td>45000</td>
              <td>{this.calculateAmount(45000, conversion)}</td>
            </tr>
            <tr>
              <td>12</td>
              <td>80000</td>
              <td>{this.calculateAmount(80000, conversion)}</td>
            </tr>
            <tr>
              <td>13</td>
              <td>120000</td>
              <td>{this.calculateAmount(120000, conversion)}</td>
            </tr>
            <tr>
              <td>14</td>
              <td>200000</td>
              <td>{this.calculateAmount(200000, conversion)}</td>
            </tr>
            <tr>
              <td>15</td>
              <td>300000</td>
              <td>{this.calculateAmount(300000, conversion)}</td>
            </tr>
          </tbody>
        </VipTable>
        <em>
          Coversion is taken from{' '}
          <a
            href="https://free.currencyconverterapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://free.currencyconverterapi.com/
          </a>
        </em>
      </>
    );
  }
}

export default VipPage;

const VipTable = styled.table`
  width: 100%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-collapse: collapse;
  margin-bottom: 1em;

  th,
  td {
    padding: 0.5em 1em;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    white-space: pre;
  }

  thead th,
  tbody td {
    text-align: center;
  }

  thead {
    color: white;
    background: #0cf;

    th {
      padding: 1em;
    }
  }
`;
const CurrencyDropdown = styled.select`
  margin: 5px 0;
  appearance: none;
  background-image: url(https://dl.dropbox.com/s/6q2p49jczkvy2n1/arrows-bg.svg),
    linear-gradient($grey-lighter, $grey-lighter), linear-gradient($grey, $grey);
  background-position: calc(100% - 14px) -34px, 100%, calc(100% - 34px) 0;
  background-size: auto, 34px 100%, 1px 100%;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 400px;
  min-width: 8.5rem;
  transition: border-color 0.1s linear;
  border: 1px solid $grey;
  border-radius: 2px;
  padding: 8px 44px 8px 8px;
  color: $grey;
  background-color: $white;
  font-size: 14px;
  height: 34px;

  &:focus {
    border-color: $primary;
    box-shadow: none;
    outline: 0;
    background-image: url(https://dl.dropbox.com/s/6q2p49jczkvy2n1/arrows-bg.svg),
      linear-gradient($grey-lighter, $grey-lighter),
      linear-gradient($primary, $primary);
    background-position: calc(100% - 14px) 12px, 100%, calc(100% - 34px) 0;
  }
`;
// const ConvertBtn = styled.button`
//   /* https://codepen.io/maziarzamani/pen/YXgvjv */
//   color: #000;
//   background-color: transparent;
//   outline: 0;
//   transition: all 0.3s ease;
//   font-size: 14px;
//   cursor: pointer;
//   border: 2px solid ${({ base }) => base};
//   padding: 7.5px 30px 7.5px 30px;
//   margin: ${({ block }) => (block ? '5px 0' : '0 5px')};
//   &:hover {
//     background-color: ${({ base }) => base};
//     color: white;
//   }
//   &:active {
//     background-color: ${({ active }) => active};
//   }
//   width: ${({ block }) => block && '100%'};
// `;
