import React, { useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import { Link, useLocation, useParams } from "react-router-dom";

const ItemDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  
  const item = location.state?.item || {
    id: Number(id),
    title: "Pinky Ocean",
    nftImage: nftImage,
    authorImage: AuthorImage,
    authorId: 1,
  };

  const itemDetails = {
  1: {
    views: 120,
    likes: 45,
    price: 1.25,
    description: "A colorful abstract NFT with a modern artistic style.",
    authorName: "Alex Morgan",
  },
  2: {
    views: 98,
    likes: 61,
    price: 1.5,
    description: "A playful pattern NFT with a clean minimalist design.",
    authorName: "Jordan Lee",
  },
  3: {
    views: 150,
    likes: 82,
    price: 1.85,
    description: "A vibrant artistic NFT full of color and movement.",
    authorName: "Taylor Smith",
  },
  4: {
    views: 210,
    likes: 110,
    price: 2.1,
    description: "A creative digital artwork with a unique visual style.",
    authorName: "Monica Lucas",
  },
  5: {
    views: 175,
    likes: 93,
    price: 2.35,
    description: "A distinctive NFT created with bold colors and shapes.",
    authorName: "Chris Wilson",
  },
  6: {
    views: 245,
    likes: 128,
    price: 2.75,
    description: "A premium digital collectible with an original design.",
    authorName: "Jamie Davis",
  },
};

const details = itemDetails[Number(id)];

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

if (!details) {
  return <h2>Item not found</h2>;
}


console.log("ITEM DETAILS:", item);
  console.log("ITEM ID:", id);
  console.log("CLICKED ITEM:", item);

  

  return (
  <div id="wrapper">
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section aria-label="section" className="mt90 sm-mt-0">
        <div className="container">
          <div className="row">

            <div className="col-md-6 text-center">
              <img
                src={item.nftImage}
                className="img-fluid img-rounded mb-sm-30 nft-image"
                alt={item.title}
              />
            </div>

            <div className="col-md-6">
              <div className="item_info">
                <h2>{item.title}</h2>

                <div className="item_info_counts">
                  <div className="item_info_views">
                    <i className="fa fa-eye"></i>
                    {details.views}
                  </div>

                  <div className="item_info_like">
                    <i className="fa fa-heart"></i>
                    {details.likes}
                  </div>
                </div>

                <p>{details.description}</p>

                <div className="spacer-40"></div>

                <h6>Owner</h6>

                <div className="item_author">
                  <div className="author_list_pp">
                    <Link to={`/author/${item.authorId}`}>
                      <img
                        className="lazy"
                        src={item.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>

                  <div className="author_list_info">
                    <Link to={`/author/${item.authorId}`}>
                      {details.authorName}
                    </Link>
                  </div>
                </div>

                <div className="spacer-40"></div>

                <h6>Price</h6>

                <div className="nft-item-price">
                  <img src={EthImage} alt="" />
                  <span>{details.price} ETH</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
);
};

export default ItemDetails;
