import React from 'react';
import Title from '../../components/Title';
import { Wrapper } from './styles';

export default function List() {
  const mock = {
    name: 'Lista de compras 02/jan',
    list_items: [
      {
        id: 1,
        name: 'Pera',
        price: '2,99',
        quantity: 1,
        checked: false,
      },
      {
        id: 2,
        name: 'Uva',
        price: '8,77',
        quantity: 12,
        checked: true,
      },
      {
        id: 3,
        name: 'Maca',
        price: '1090,99',
        quantity: 2,
        checked: true,
      },
    ],
  };

  const handleChecked = (itemId) => {
    //
  };

  return (
    <Wrapper>
      <Title text={mock.name} />
      <table>
        {mock.list_items.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={handleChecked(item.id)}
              />
            </td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </Wrapper>
  );
}
