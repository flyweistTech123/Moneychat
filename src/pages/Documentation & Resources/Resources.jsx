import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import HOC from '../../layout/HOC';
import './Resources.css';
import slide1 from '../../Images/slide1.png'
import slide2 from '../../Images/slide2.png'
import slide3 from '../../Images/slide3.png'
import Categories1 from '../../Images/Categories1.png'
import Categories2 from '../../Images/Categories2.png'
import article from '../../Images/articals.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import DucmentModal from './DocumentationModal'
import documentimg from '../../Images/document.png'




const images = [
  {
    url: slide1,
  },
  {
    url: slide2,
  },
  {
    url: slide3,
  },
];

const articlesData = [
  { id: 1, title: 'Title', imageUrl: article },
  { id: 2, title: 'Title', imageUrl: article },
  { id: 3, title: 'Title', imageUrl: article },
  { id: 4, title: 'Title', imageUrl: article },
  { id: 5, title: 'Title', imageUrl: article },
  { id: 6, title: 'Title', imageUrl: article },
];

const Article = ({ id, title, imageUrl }) => (
  <div className="article" key={id}>
    <img src={imageUrl} alt={`Article ${id}`} />
    <div>
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor auctor posuere. In rhoncus auctor posuer.............</p>
      <span className="view-more">
        <span className="view-more-text" >VIEW MORE  </span> <IoIosArrowRoundForward />
      </span>
    </div>
  </div>
);

const Resources = () => {
  const [isDocumentModalOpen, setDocumentModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Auto slide every 3 seconds (adjust as needed)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval in milliseconds (e.g., 3000 for 3 seconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const openDocumentModalOpen = () => {
    setDocumentModalOpen(true);
  };

  const closeDocumentModalModal = () => {
    setDocumentModalOpen(false);
  };
  return (
    <>
      <section className="pages">
        <div className="Heading_all">
          <h5>Documentation & Resources</h5>
        </div>
        <div className="searchbox">
          <i>
            <IoSearch />
          </i>
          <input type="search" placeholder="Search" />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
          <div className='left_side'>
            <h5>Updates & Newsletters</h5>
            <div className="app1">
              <div className="carousel">
                <div
                  className="slider"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="slide" onClick={openDocumentModalOpen}>
                      <img src={image.url} alt={`Slide ${index + 1}`} />

                    </div>
                  ))}
                </div>
              </div>
              <div className="dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={index === currentIndex ? 'dot active' : 'dot'}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
              </div>
            </div>
            <div className='card1'>
              <h5>Categories</h5>
              <div className='intakecards'>
                <div className="small-card">
                  <img src={Categories1} alt="Icon" className="card-icon" />
                  <p >Training Manual</p>
                  <span>DATE ADDED : DD/MM/YYYY</span>
                </div>
                <div className="small-card">
                  <img src={Categories2} alt="Icon" className="card-icon" />
                  <p>Marketing Resources</p>
                  <span>DATE ADDED : DD/MM/YYYY</span>
                </div>
                <div className="small-card">
                  <img src={Categories1} alt="Icon" className="card-icon" />
                  <p>Training Manual</p>
                  <span>DATE ADDED : DD/MM/YYYY</span>
                </div>
                <div className="small-card">
                  <img src={Categories2} alt="Icon" className="card-icon" />
                  <p>Marketing Resources</p>
                  <span>DATE ADDED : DD/MM/YYYY</span>
                </div>
                <div className="small-card">
                  <img src={Categories1} alt="Icon" className="card-icon" />
                  <p>Training Manual</p>
                  <span>DATE ADDED : DD/MM/YYYY</span>
                </div>
                <div className="small-card">
                  <img src={Categories2} alt="Icon" className="card-icon" />
                  <p>Marketing Resources</p>
                  <span>DATE ADDED : DD/MM/YYYY</span>
                </div>
              </div>
            </div>
          </div>


          <div className='right_side'>
            <h5>Recently Viewed</h5>
            <div className="article-container" onClick={openDocumentModalOpen}>
              {articlesData.map(article => (
                <Article key={article.id} {...article}  />
              ))}
            </div>
          </div>

        </div>

        {/* Notification Modal */}
        {isDocumentModalOpen && (
          <DucmentModal onClose={closeDocumentModalModal} isDocumentationModalOpen={isDocumentModalOpen}>
            <div className='documentation'>
              <h5>Email Communication</h5>
              <hr />
              <img src={documentimg} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor auctor posuere. In rhoncus rhoncus gravida. Maecenas odio neque, sagittis et varius quis, sagittis id turpis. Mauris mauris tellus, molestie at dignissim nec, efficitur id turpis. Aenean eget commodo turpis. Sed ut fermentum ante, quis condimentum velit. Maecenas vestibulum scelerisque hendrerit. Praesent eu risus ipsum. Vivamus scelerisque eget quam sit amet vehicula. Aenean gravida, metus et varius accumsan, lacus elit ultrices ligula, in lacinia mi enim posuere diam. Curabitur pulvinar scelerisque faucibus. Etiam posuere lobortis metus, ac molestie felis pellentesque a. Fusce aliquet eget tortor pharetra venenatis. Nullam tincidunt convallis elit eget hendrerit. Duis non scelerisque lacus.
                Pellentesque scelerisque libero ac congue lacinia. Morbi enim nisl, feugiat nec enim sit amet, placerat efficitur lectus. Quisque nisi ipsum, accumsan in velit et, scelerisque sollicitudin urna. Quisque at molestie mauris, a laoreet leo. Morbi maximus dolor ac sem vulputate, eget varius diam mattis. Aenean nunc mi, convallis a justo tempus, ultrices hendrerit ligula. Nulla at maximus mi. Sed vel arcu sed dui feugiat vestibulum non vitae risus.</p>
              <p>Vivamus feugiat, enim eu pretium lobortis, nibh tortor finibus augue, nec aliquet leo tellus vel elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pulvinar libero quis odio hendrerit imperdiet. Morbi a orci eu diam placerat pellentesque sit amet vel felis. Phasellus interdum vulputate luctus. Donec non nunc efficitur, accumsan ex eget, porttitor ex. Nam porttitor congue augue, efficitur ullamcorper tortor bibendum id. Integer egestas ante facilisis neque rutrum consequat. Mauris ornare sit amet nulla feugiat sagittis. Suspendisse imperdiet in turpis et tempor. Cras mollis id eros ut consectetur. Sed quis ex risus. Vivamus mollis egestas felis, vitae mollis lorem pretium in. Donec quis metus at felis fermentum porta. Maecenas commodo mattis molestie. Curabitur viverra auctor ante at mollis.</p>
            </div>
          </DucmentModal>
        )}

      </section>

    </>
  );
};

export default HOC(Resources);
