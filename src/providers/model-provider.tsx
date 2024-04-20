"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ModelProviderProps {
  children: React.ReactNode;
}

export type ModelData = {};

type ModelContextType = {
  data: ModelData;
  isOpen: boolean;
  setOpen: (model: React.ReactNode, fetchData?: () => Promise<any>) => void;
  setClose: () => void;
};

export const ModalContext = createContext<ModelContextType>({
  data: {},
  isOpen: false,
  setOpen: (model: React.ReactNode, fetchData?: () => Promise<any>) => {},
  setClose: () => {},
});

export const ModelProvider: React.FC<ModelProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModelData>({});
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setOpen = async (
    model: React.ReactNode,
    fetchData?: () => Promise<any>
  ) => {
    if (model) {
      if (fetchData) {
        setData({ ...data, ...(await fetchData()) } || {});
      }
      setShowingModal(model);
      setIsOpen(true);
    }
  };

  const setClose = () => {
    setIsOpen(false);
    setData({});
  };

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ data, setClose, setOpen, isOpen }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be use within the modal provider");
  }

  return context;
};
