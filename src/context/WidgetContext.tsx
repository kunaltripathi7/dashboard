import { createContext, useContext, useState } from "react";
import widgetsData from "../data/widgets.json";
import { CategoriesType, CategoryWidget, WidgetsType } from "../types";

// Define the shape of your context
interface WidgetContextType {
  widgets: WidgetsType;
  categories: CategoriesType;
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  handleSidebar: () => void;
  handleAddWidget: (widget: CategoryWidget) => void;
  handleRemoveWidget: (widget: CategoryWidget) => void;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

// Create the context with an undefined default value
const WidgetContext = createContext<WidgetContextType | null>(null);

function WidgetProvider({ children }: { children: React.ReactNode }) {
  const [widgets] = useState<WidgetContextType["widgets"]>(
    widgetsData.allWidgets
  );
  const [categories, setCategories] = useState<WidgetContextType["categories"]>(
    widgetsData.categories
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function handleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  function handleAddWidget(widget: CategoryWidget) {
    const categoryId = widget.id.split("-")[0];
    const categoryIndex = categories.findIndex((ctg) => ctg.id === categoryId);
    setCategories((prev) => {
      return prev.map((ctg, idx) => {
        if (idx === categoryIndex) {
          return {
            ...ctg,
            widgets: [...ctg.widgets, widget],
          };
        } else return ctg;
      });
    });
  }

  function handleRemoveWidget(widget: CategoryWidget) {
    const categoryId = widget.id.split("-")[0];
    const categoryIndex = categories.findIndex((ctg) => ctg.id === categoryId);
    const widgetIndex = categories[categoryIndex].widgets.findIndex(
      (wtg) => wtg.id === widget.id
    );
    setCategories((prev) => {
      return prev.map((ctg, idx) => {
        if (idx === categoryIndex) {
          return {
            ...ctg,
            widgets: ctg.widgets.filter((_, idx2) => idx2 !== widgetIndex),
          };
        } else return ctg;
      });
    });
  }

  function onCloseModal() {
    setModalOpen(false);
  }
  function onOpenModal() {
    setModalOpen(true);
  }

  return (
    <WidgetContext.Provider
      value={{
        widgets,
        categories,
        isSidebarOpen,
        isModalOpen,
        handleSidebar,
        handleAddWidget,
        handleRemoveWidget,
        onCloseModal,
        onOpenModal,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}

function useWidgets() {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error("useWidgets must be used within a WidgetProvider");
  }
  return context;
}

export { WidgetProvider, useWidgets };
