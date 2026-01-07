import React from 'react';

const Loading = () => {
    return (
        
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            
            
            <div 
                className="w-12 h-12 border-4 border-indigo-500 border-t-transparent border-solid rounded-full animate-spin"
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>

           
            <p className="ml-4 text-lg font-medium text-gray-700">
                Please wait...
            </p>
        </div>
    );
};

export default Loading;