import { AlertTriangle } from "lucide-react";

export const GenericModalUI = ({
  title,
  description,
  onClose,
  onConfirm,
}: {
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex w-12 h-12 bg-red-100 rounded-full items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">
              This action cannot be undone
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-gray-800">
            {description}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            All related data will be permanently removed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition" onClick={onConfirm}>
            Delete
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-100 transition" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
