import React from 'react'; //eslint-disable-line
import Avatar from './Avatar';

module.exports = ({ storiesOf, action, knob }) => {
  return storiesOf('Avatar', module)
    //.addHtml(<link rel="stylesheet" type="text/css" href="https://yastatic.net/bootstrap/3.3.6/css/bootstrap.min.css" />)
    .add('Квадратный', () => (
      <Avatar src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png" size="larger" alt="Квадратный аватар" title="Квадратный аватар" />
    ))
    .add('Круглый', () => (
      <Avatar src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png" renderType="round" size="larger" alt="Круглый аватар" title="Круглый аватар" />
    ))
    .add('Закругленный', () => (
      <Avatar src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png" renderType="rounded" size="larger" alt="Закругленный аватар" title="Круглый аватар" />
    ))
    .add('Закругленный c тенью', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="larger"
        alt="Закругленный аватар c тенью"
        title="Закругленный аватар c тенью"
        shadow="true" />
    ))
    .add('Закругленный c тенью и рамкой', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="larger"
        alt="Закругленный аватар c тенью и рамкой"
        title="Закругленный аватар c тенью и рамкой"
        shadow="true"
        border="true" />
    ))
    .add('Закругленный заданным цветом', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="larger"
        alt="Закругленный заданным цветом"
        title="Закругленный заданным цветом"
        shadow="true"
        border="true"
        color="orange" />
    ))
    .add('Офлайн', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="larger"
        alt="Оффлайн"
        title="Оффлайн"
        shadow="true"
        border="true"
        statusType="off"/>
    ))
    .add('Онлайн', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="larger"
        alt="Онлайн"
        title="Онлайн"
        shadow="true"
        border="true"
        statusType="on"/>
    ))
    .add('Placeholder, если изображение не удалось загрузить', () => (
      <Avatar
        src="https://static.giantbomb.com/badUrl.png"
        renderType="rounded"
        size="larger"
        alt="Битая картинка"
        title="Битая картинка"
        shadow="true"
        border="true"
        statusType="on"/>
    ))
    .add('Маленькая', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="small"
        alt="Маленькая"
        title="Маленькая"
        shadow="true"
        border="true"
        statusType="on"/>
    ))
    .add('Средняя', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        alt="Средняя"
        title="Средняя"
        shadow="true"
        border="true"
        statusType="on"/>
    ))
    .add('Большая', () => (
      <Avatar
        src="https://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"
        renderType="rounded"
        size="large"
        alt="Большая"
        title="Большая"
        shadow="true"
        border="true"
        statusType="on"/>
    ));
};
