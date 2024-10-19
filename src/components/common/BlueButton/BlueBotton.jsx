const BlueButton = ({ type, buttonText, isDisabled, ClickHandler }) => {
    return (
      <button
        onClick={ClickHandler}
        type={type}
        className={
          isDisabled
            ? `min-w-[100px] btn bg-gradient-to-t cursor-no-drop opacity-50 block mx-auto rounded-full 
            text-base text-white shadow-md pb-2  hover:shadow-inner hover:shadow-blue-900 
              transform hover:scale-125 transition ease-out duration-300 flex-row-all-center py-2 px-4`
            : `min-w-[100px] btn bg-gradient-to-t from-bluePrimary to-blueSecondary 
              block mx-auto rounded-full text-base text-white shadow-md shadow-bluePrimary/50 pb-2
                hover:shadow-inner hover:shadow-blue-900 
              transform hover:scale-125 transition ease-out duration-300 flex-row-all-center py-2 px-4`
        }
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    );
  };
  
  export { BlueButton };