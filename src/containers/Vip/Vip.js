import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import currenctList from './currency.json';

export default () => {
  const allCurrencies = _.map(currenctList, cur => {
    return (
      <option value={cur.id} key={cur.id}>
        {`${cur.id} (${cur.currencyName})`}
      </option>
    );
  });
  return (
    <>
      <div className="page-title">VIP Levels</div>
      <p>Note: 60 VIP Score = 1 dollar</p>
      <div>
        <span>Currency </span>
        <CurrencyDropdown>{allCurrencies}</CurrencyDropdown>
      </div>
      <VipTable>
        <thead>
          <tr>
            <th>VIP Level</th>
            <th>VIP Score</th>
            <th>
              Amount
              <br />
              (currency_here)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>60</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>300</td>
            <td>-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>500</td>
            <td>-</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>2000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>4000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>6000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>10000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>18000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10</td>
            <td>29000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11</td>
            <td>45000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>12</td>
            <td>80000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>13</td>
            <td>120000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>14</td>
            <td>200000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>15</td>
            <td>300000</td>
            <td>-</td>
          </tr>
        </tbody>
      </VipTable>
    </>
  );
};

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
  margin: 20px 0;
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
