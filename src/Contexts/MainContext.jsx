import { createContext } from "react";

const MainContext = createContext({
    token: null,
    setToken: (token) => {},
    removeToken: (token) => {},
    refreshToken: null,
    setRefreshToken: (refreshToken) => {},
    removeRefreshToken: (refreshToken) => {},
    currentLoggedUserId: null,
    setCurrentLoggedUserId: (id) => {},
    removeCurrentLoggedUserId: (id) => {},
    sideNavOpen: true,
    setSideNavOpen: (status) => {},
    isModalPontoOpen: false,
    setIsModalPontoOpen: (status) => {},
    pontoStatus: "SUCCESS",
    setPontoStatus: (stat) => {},
    showNavBarXs: false,
    setShowNavBarXs: (status) => {},
    openMoreInfo: false,
    setOpenMoreInfo: (status) => {},
    hasCloseEditModal: false,
    sethasCloseEditModal: (status) => {},
    removehasCloseEditModal: (id) => {},
    addModalOpen: false,
    setaddModalOpen: (status) => {},
    userLocalization: '',
    setUserLocalization: (local) => {},
    browserLanguage: '',
    setBrowserLanguage: (local) => {},
    notificationCount: 0,
    setNotificationCount: (notific) => {},
    selectedPDF: (local) => {},
    setSelectedPDF: (local) => {},
    showTips: (local) => {},
    setShowTips: (local) => {},
    hasAskedForGeo: false,
    setHasAskedForGeo: (local) => {},
});

export default MainContext;