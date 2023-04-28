import React from "react";
import { Simulate } from "react-dom/test-utils";
import "./Content2_Item.css";

const Content2_Item = () => {
    return (
        <div className="Content2_Item">
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/148019114_1165401657196262_949220552139744148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=idb3ZF6PqwcAX-1oJOS&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDmw2OpjbJhq57ZpALR-W5H55RVCYth0tPB-lAFE-9jfA&oe=64658F90"></img>
                <p className="Content2_Item--text">
                    ProManage is undoubtedly the top-choice Product Management Tool for company. Efficiency and intelligence are built into the design, which enables a very smooth management workflow experience, from design, implementation! I switched to using ProManage 5 years ago and have never looked back. It has certainly made my business easier. I am producing more with less effort.
                    <h3 className="Content2_Item--dev">
                        Le Hai Lam
                    </h3>
                    <h4 className="Content2_Item--job">
                        Founder of Avengers
                    </h4>
                </p>
            </div>
        </div>
    );
}

export default Content2_Item;
