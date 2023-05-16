import React, { useState, useEffect } from "react"

interface SettingsPopupProps {
    onClose: () => void;
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState<string>("Main")
    const [imageHover, setImageHover] = useState<boolean>(false)

    // Load settings from localStorage on component mount
    useEffect(() => {
        const storedImageHover = localStorage.getItem("imageHover")
        if (storedImageHover !== null) {
            setImageHover(JSON.parse(storedImageHover))
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked
        setImageHover(newValue)
        localStorage.setItem("imageHover", JSON.stringify(newValue))
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Settings</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="flex mb-4">
                    <button
                        className={`mr-4 ${activeTab === "Main" ? "font-semibold" : ""}`}
                        onClick={() => setActiveTab("Main")}
                    >
                        Main
                    </button>
                    <button
                        className={`${activeTab === "Advanced" ? "font-semibold" : ""}`}
                        onClick={() => setActiveTab("Advanced")}
                    >
                        Advanced
                    </button>
                </div>
                {activeTab === "Main" && (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="image-hover" className="flex items-center">
                                <input
                                    id="image-hover"
                                    type="checkbox"
                                    className="mr-2"
                                    checked={imageHover}
                                    onChange={handleChange}
                                />
                                Image Hover
                            </label>
                        </div>
                    </div>
                )}
                {activeTab === "Advanced" && (
                    <div>
                        {/* Add advanced settings here */}
                        <p>Advanced settings will be added here.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SettingsPopup
