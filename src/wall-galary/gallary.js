import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomModal from "../component/custom-modal";
import "../style/wall-gallary.css";

function Gallary() {
  const [isOpen, setIsOpen] = useState(false);
  const [tempImage, setTempImage] = useState("");
  const [data, setData] = useState([]);

  const handleImage = (photo) => {
    setIsOpen(true);
    setTempImage(photo);
  };

  useEffect(() => {
    axios.get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0").then((response) => setData(response.data));
  }, []);

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        src={tempImage}
        onClickEnable={() => setIsOpen(false)}
        onClickDisable={() => setIsOpen(false)}
      />
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div key={index} onClick={() => handleImage(item.user.profile_image.large)} style={{ cursor: "pointer" }}>
              <img src={item.user.profile_image.large} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallary;
