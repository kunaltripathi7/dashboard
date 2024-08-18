import { useState } from "react";
import { CategoryType } from "../types";

type Props = {
  isOpen: boolean;
  onSave: (category: CategoryType, name: string, content: string) => void;
  onClose: () => void;
  category: CategoryType | null;
};

const CreateWidgetModal = ({ isOpen, onClose, onSave, category }: Props) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  console.log(category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return;
    onSave(category, name, content);
    setName("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-40">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-xl transform transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Widget
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="widgetName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Widget Name:
            </label>
            <input
              type="text"
              id="widgetName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14147D] focus:border-[#14147D]transition duration-150 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="widgetContent"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Widget Content:
            </label>
            <textarea
              id="widgetContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14147D] focus:border-[#14147D] transition duration-150 ease-in-out resize-none"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-[#14147D] focus:outline-none focus:ring-2 focus:ring-[#14147D ] transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWidgetModal;
