import React from 'react';
import { BiEditAlt } from 'react-icons/bi';

export function AvatarModal() {
  function handleImageChange(users, id) {
    const fileInput = document.getElementById('upload');
    const preview = document.getElementById('imagePreview');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      function () {
        const base64 = reader.result.split(',')[1];

        preview.innerHTML = `<img src="${reader.result}" />`;

        sendDataToAPI(base64);
      },
      false,
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function sendDataToAPI() {}

  return (
    <div>
      <input type="file" id="upload" hidden onChange={handleImageChange} />
      <label for="upload">
        <BiEditAlt />
      </label>
      <div id="imagePreview"></div>
    </div>
  );
}
