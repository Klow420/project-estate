import React from 'react';

const CookieConsentBanner = ({ onConsentAccept }) => {
    const handleAcceptClick = () => {
        onConsentAccept(); // Appeler la fonction de rappel lorsque l'utilisateur accepte
    };

    return (
        <div className="fixed bg-gray-800 text-white p-4 rounded-md m-1 flex flex-col gap-3
        bottom-1 right-1
        md:w-[210px] md:h-[230px]
        lg:w-[250px] lg:h-[250px] lg:gap-7"
        style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // pour Safari
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacité pour améliorer l'effet
            zIndex: 9999, // Assure que le banner est au-dessus de tout le contenu
        }}>
            <p>
            This application uses cookies to improve the user experience. By continuing to browse this site, you accept our use of cookies.
            </p>
            <button className="mx-auto px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded
            w-[100px] h-[50px] lg:w-[100px] md:h-[40px]"
            onClick={handleAcceptClick}>I agree</button>
        </div>
    );
};

export default CookieConsentBanner;
