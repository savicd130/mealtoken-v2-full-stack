import React, { useState } from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DescriptionIcon from '@material-ui/icons/Description';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Info from '../components/Info';

export default function ProductScreen() {
  const [qta, setQta] = useState(1);
  const [tabs, setTabs] = useState(1);
  return (
    <>
      <Title title="Product details" />

      <div className="product">
        <div className="product-img">
          <img src="/products/pizza/Vincent.png" alt="prod" />
        </div>
        <div className="product-side">
          <div>
            <h2 className="product-side-h2">Vincent</h2>
            <h3 className="product-side-h3">29.00$</h3>
            <Rating
              className="product-side-rating"
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </div>
          <div>
            <p className="product-side-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur...
            </p>
            <div className="product-side-qta">
              <IconButton disabled={qta === 1} onClick={() => setQta(qta - 1)}>
                <RemoveIcon />
              </IconButton>
              <p>{qta}</p>
              <IconButton onClick={() => setQta(qta + 1)}>
                <AddIcon />
              </IconButton>
            </div>
            <div className="product-side-btns">
              <Link to="/shop" className="btn btn-primary">
                Add to cart
              </Link>
              <Link to="/menu" className="btn btn-secondary">
                Back to menu
              </Link>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <ul>
            <li className={tabs === 1 ? 'active' : ''}>
              <button onClick={() => setTabs(1)}>
                <DescriptionIcon /> Description
              </button>
            </li>
            <li className={tabs === 2 ? 'active' : ''}>
              <button onClick={() => setTabs(2)}>
                <RateReviewIcon /> Reviews
              </button>
            </li>
          </ul>

          <div className={`product-tabs-box ${tabs === 1 ? '' : 'hidden'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            rem omnis tempora, fugiat odit nesciunt ex commodi atque
            exercitationem voluptas officia quas nam dolores ipsam explicabo
            magnam architecto suscipit quam fugit voluptatum dolorum
            voluptatibus praesentium maxime ducimus? A nostrum fugiat omnis
            velit eligendi recusandae reiciendis veritatis eum facere, qui
            doloremque doloribus explicabo voluptatem tenetur cumque quisquam
            ullam. A nobis incidunt optio necessitatibus iusto ipsam,
            accusantium praesentium dignissimos quod omnis, assumenda culpa
            temporibus earum delectus labore mollitia neque soluta sed explicabo
            nostrum, voluptatum enim iste inventore. Voluptatum illum
            voluptates, possimus dolor reprehenderit numquam architecto.
            Eligendi sint consequatur minus deleniti aperiam aut.
          </div>
          <div className={`product-tabs-box ${tabs === 2 ? '' : 'hidden'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            rem omnis tempora, fugiat odit nesciunt ex criam aut.
          </div>
        </div>
      </div>

      <Info />
    </>
  );
}
