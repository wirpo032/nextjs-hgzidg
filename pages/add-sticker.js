import { useState } from 'react';
import getConfig from 'next/config';

function AddSticker() {
  const [Virnumm, setVirnumm] = useState('');
  const [Nonumm, setNonumm] = useState('');

  async function AddSticker() {
    const stickersInfo = {
      Virnumm: Virnumm,
      Nonumm: Nonumm,
    };

    const add = await fetch(
      'https://backend-core.admin.luxadmin.lu/stickers/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(stickersInfo),
      }
    );

    const addResponse = await add.json();
    console.log(addResponse);
  }

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setVirnumm(e.target.value)}
        value={Virnumm}
        placeholder="Virnumm"
      />{' '}
      <br />
      <input
        type="text"
        onChange={(e) => setNonumm(e.target.value)}
        value={Nonumm}
        placeholder="Nonumm"
      />{' '}
      <br />
      <button type="button">Add sticker-person</button>
    </form>
  );
}
export default AddSticker;
