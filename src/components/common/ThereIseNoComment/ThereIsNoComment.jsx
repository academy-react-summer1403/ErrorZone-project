import React from 'react'
import {ThereIsNoCommentImage} from './../../../assets/images/NoPhoto/NoPhoto.png'

const ThereIsNoComment = () => {
    return (
        <>
          <img src={ThereIsNoCommentImage} className="w-300 mx-auto " alt="" />
          <p className="mb-5">{text}</p>
          <BlueButton
            buttonText={
              <>
                <i className="fi fi-sr-comment-check relative top-0.5"></i>
                <span className="mx-2">ثبت دیدگاه جدید</span>
              </>
            }
            type={"button"}
            ClickHandler={ClickHandler}
          />
        </>
      );
}

export default ThereIsNoComment