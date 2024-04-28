import image1 from "../../images/images2/1.jpg";
import image2 from "../../images/images2/2.jpg";
import image3 from "../../images/images2/3.jpg";
import image4 from "../../images/images2/4.jpg";
import image5 from "../../images/images2/5.jpg";
import image6 from "../../images/images2/6.jpg";
import image7 from "../../images/images2/7.jpg";

function Images() {
  const galleryImages = [
    { src: image1, alt: "image1 description" },
    { src: image2, alt: "image2 description" },
    { src: image3, alt: "image1 description" },
    { src: image4, alt: "image2 description" },
    { src: image5, alt: "image1 description" },
    { src: image6, alt: "image2 description" },
    { src: image7, alt: "image2 description" },
  ];
  return (
    <div>
        <h1 style={{fontFamily: "handwritting", textAlign: "center", fontSize:"80px"}}>images</h1>

    
<div id="content" style={{ display: 'flex' }}>

    
    {galleryImages.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} style={{ width: '200px', height: '200px', marginRight: '10px', marginTop: '10px' }} />
    ))}
</div>
</div>
  );
}

export default Images;
