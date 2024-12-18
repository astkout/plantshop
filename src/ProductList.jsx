import React, { useState } from "react";
import "./ProductList.css";  // Ensure this is the correct path to your CSS file

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true);  // Default to show plants
  const [cart, setCart] = useState([]);

  const plantsArray = [
    {
        category: "Air Purifying Plants",
        plants: [
            {
                name: "Snake Plant",
                image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                description: "Produces oxygen at night, improving air quality.",
                cost: "$15"
            },
            {
                name: "Spider Plant",
                image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                description: "Filters formaldehyde and xylene from the air.",
                cost: "$12"
            },
            {
                name: "Peace Lily",
                image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                description: "Removes mold spores and purifies the air.",
                cost: "$18"
            },
            {
                name: "Boston Fern",
                image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                description: "Adds humidity to the air and removes toxins.",
                cost: "$20"
            },
            {
                name: "Rubber Plant",
                image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                description: "Easy to care for and effective at removing toxins.",
                cost: "$17"
            },
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "Purifies the air and has healing properties for skin.",
                cost: "$14"
            }
        ]
    },
    {
        category: "Aromatic Fragrant Plants",
        plants: [
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Jasmine",
                image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Sweet fragrance, promotes relaxation.",
                cost: "$18"
            },
            {
                name: "Rosemary",
                image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                description: "Invigorating scent, often used in cooking.",
                cost: "$15"
            },
            {
                name: "Mint",
                image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                description: "Refreshing aroma, used in teas and cooking.",
                cost: "$12"
            },
            {
                name: "Lemon Balm",
                image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                description: "Citrusy scent, relieves stress and promotes sleep.",
                cost: "$14"
            },
            {
                name: "Hyacinth",
                image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                cost: "$22"
            }
        ]
    },
    {
        category: "Insect Repellent Plants",
        plants: [
            {
                name: "oregano",
                image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                description: "The oregano plants contains compounds that can deter certain insects.",
                cost: "$10"
            },
            {
                name: "Marigold",
                image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                description: "Natural insect repellent, also adds color to the garden.",
                cost: "$8"
            },
            {
                name: "Geraniums",
                image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                description: "Known for their insect-repelling properties while adding a pleasant scent.",
                cost: "$20"
            },
            {
                name: "Basil",
                image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                description: "Repels flies and mosquitoes, also used in cooking.",
                cost: "$9"
            },
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Catnip",
                image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                description: "Repels mosquitoes and attracts cats.",
                cost: "$13"
            }
        ]
    },
    {
        category: "Medicinal Plants",
        plants: [
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "Soothing gel used for skin ailments.",
                cost: "$14"
            },
            {
                name: "Echinacea",
                image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                description: "Boosts immune system, helps fight colds.",
                cost: "$16"
            },
            {
                name: "Peppermint",
                image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                description: "Relieves digestive issues and headaches.",
                cost: "$13"
            },
            {
                name: "Lemon Balm",
                image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                description: "Calms nerves and promotes relaxation.",
                cost: "$14"
            },
            {
                name: "Chamomile",
                image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                description: "Soothes anxiety and promotes sleep.",
                cost: "$15"
            },
            {
                name: "Calendula",
                image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                description: "Heals wounds and soothes skin irritations.",
                cost: "$12"
            }
        ]
    },
    {
        category: "Low Maintenance Plants",
        plants: [
            {
                name: "ZZ Plant",
                image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Thrives in low light and requires minimal watering.",
                cost: "$25"
            },
            {
                name: "Pothos",
                image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                description: "Tolerates neglect and can grow in various conditions.",
                cost: "$10"
            },
            {
                name: "Snake Plant",
                image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                description: "Needs infrequent watering and is resilient to most pests.",
                cost: "$15"
            },
            {
                name: "Cast Iron Plant",
                image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                description: "Hardy plant that tolerates low light and neglect.",
                cost: "$20"
            },
            {
                name: "Succulents",
                image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                description: "Drought-tolerant plants with unique shapes and colors.",
                cost: "$18"
            },
            {
                name: "Aglaonema",
                image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                description: "Requires minimal care and adds color to indoor spaces.",
                cost: "$22"
            }
        ]
    }
];

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowPlants(false);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    setCart((prevCart) => {
      const plantIndex = prevCart.findIndex((item) => item.name === plant.name);
      if (plantIndex !== -1) {
        // If the plant is already in the cart, increase the quantity
        const updatedCart = [...prevCart];
        updatedCart[plantIndex].quantity += 1;
        return updatedCart;
      }
      // If the plant is not in the cart, add it with quantity 1
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (plantName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== plantName));
  };

  const handleIncreaseQuantity = (plantName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === plantName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (plantName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === plantName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  return (
    <div>
      <div className="navbar">
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <a href="/" className="tag_home_link">
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>
        <div className="ul">
          <a href="#" onClick={handlePlantsClick}>Plants</a>
          <a href="#" onClick={handleCartClick}>Cart ({cart.length})</a>
        </div>
      </div>

      {showPlants && (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <div key={category.category}>
              <h2 className="plantname_heading">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant) => (
                  <div key={plant.name} className="product-card">
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-price">{plant.cost}</p>
                    {/* Hide the button if the plant is already in the cart */}
                    {!cart.some((item) => item.name === plant.name) ? (
                      <button
                        onClick={() => handleAddToCart(plant)}
                        className="product-button"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        disabled
                        className="product-button added"
                      >
                        Added to Cart
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {showCart && (
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in the cart yet!</p>
          ) : (
            <div>
              <ul>
              {cart.map((item) => (
                  <li key={item.name} className="cart-item">
                    <div className="cart-item-details">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="cart-item-price">{item.cost}</p>
                        <div className="cart-item-quantity">
                          <button onClick={() => handleDecreaseQuantity(item.name)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleIncreaseQuantity(item.name)}>+</button>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.name)} className="remove-item">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p><strong>Total:</strong> ${cart.reduce((total, item) => total + parseFloat(item.cost.slice(1)) * item.quantity, 0).toFixed(2)}</p>
                <button onClick={handleContinueShopping} className="continue-shopping">
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductList;