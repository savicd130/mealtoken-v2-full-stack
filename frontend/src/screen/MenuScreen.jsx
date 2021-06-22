import React, { useEffect, useState } from 'react';
import Info from '../components/Info';
import { Link, Redirect, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Title from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { productsByCategoryAction } from '../Redux/actions/ProductsAction';
import ErrorBox from '../layout/ErrorBox';
import LoadingBox from '../layout/LoadingBox';
import { useRef } from 'react';
import { Pagination } from '@material-ui/lab';

export default function MenuScreen(props) {
  const PRODUCT_ITEM_SHOW_NUMBER = 8;

  const { category } = useParams();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const productsByCategory = useSelector(state => state.productsByCategory);
  const { loading, error, products } = productsByCategory;

  const messagesRef = useRef();
  const scrollToTop = () => {
    messagesRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // PAGI
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    scrollToTop();
  };

  const handlePaginationCountNum = (prod, index) => {
    return Math.ceil(prod.length / index);
  };

  const handlePagination = (prod, index) => {
    return prod.slice((page - 1) * index, index * page);
  };

  useEffect(() => {
    if (messagesRef.current) {
      scrollToTop();
    }
    dispatch(productsByCategoryAction(category));
    setPage(1);
  }, [category, dispatch]);

  if (!category) {
    return <Redirect to="/menu/pizza" />;
  }

  return (
    <>
      <Title title="Discover our menu" />

      <div ref={messagesRef} className="menu">
        <div className="menu__nav">
          <ul>
            <li>
              <Link
                className={category === 'burger' ? 'active' : ''}
                to="/menu/burger"
              >
                Burgers
              </Link>
            </li>
            <li>
              <Link
                className={category === 'dessert' ? 'active' : ''}
                to="/menu/dessert"
              >
                Desserts
              </Link>
            </li>
            <li>
              <Link
                className={category === 'pasta' ? 'active' : ''}
                to="/menu/pasta"
              >
                Pasta
              </Link>
            </li>
            <li>
              <Link
                className={category === 'pizza' ? 'active' : ''}
                to="/menu/pizza"
              >
                Pizzas
              </Link>
            </li>
            <li>
              <Link
                className={category === 'salads' ? 'active' : ''}
                to="/menu/salads"
              >
                Salads
              </Link>
            </li>
          </ul>
        </div>

        {loading ? (
          <LoadingBox size="20rem" />
        ) : error ? (
          <ErrorBox error={error} />
        ) : products.length === 0 ? (
          <Redirect to="/menu/pizza" />
        ) : (
          <div className="menu__content">
            {handlePagination(products, PRODUCT_ITEM_SHOW_NUMBER).map(prod => (
              <div key={prod._id} className="menu__content--box">
                <div className="menu__content--cart">
                  <img src={prod.imgPath} alt="prod1" />
                  <button
                    onClick={e => {
                      console.log('cart');
                    }}
                    className="menu__content--cart__btn"
                  >
                    <ShoppingCartIcon className="menu__content--cart__icon" />
                  </button>
                </div>

                <Link
                  to={`/product/${prod._id}`} // CHANGE
                  className="menu__content--footer"
                  onClick={e => {
                    console.log('link');
                  }}
                >
                  <h3>{prod.title}</h3>
                  <p>{prod.shortDesc}</p>
                  <h4>{prod.price}</h4>
                </Link>
              </div>
            ))}
            <div className="pagination">
              <Pagination
                component="div"
                count={handlePaginationCountNum(
                  products,
                  PRODUCT_ITEM_SHOW_NUMBER
                )}
                page={page}
                onChange={handleChangePage}
              />
            </div>
          </div>
        )}
      </div>

      <Info />
    </>
  );
}
