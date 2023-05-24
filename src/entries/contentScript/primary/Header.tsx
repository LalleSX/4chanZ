import React, { useState } from "react"
import SettingsPopup from "./SettingsPopup"

const Header = () => {
	// Get the board name from the URL (e.g. /g/ or /pol/)
	const board = window.location.pathname.split("/")[1]
	// Get the URL for the index page of the board
	const indexUrl = `https://boards.4chan.org/${board}/`
	// Get the URL for the catalog page of the board
	const catalogUrl = `https://boards.4chan.org/${board}/catalog`
	const [settingsVisible, setSettingsVisible] = useState<boolean>(false)
	// Remove the default header

	const toggleSettingsPopup = () => {
		setSettingsVisible(!settingsVisible)
	}

	// List of boards for custom navigation
	const customBoardNavigation: string[] = ["g", "pol", "sci"]

	return (
		<div className=" bg-indigo-50 text-gray-900 py-0.5 px-4 flex justify-between items-center fixed top-0 left-0 w-full border-b border-gray-300 z-10 border-solid">
			<div className="flex items-center">
				< a href={indexUrl} className="mx-2 hover:text-red-500" >
					<p className="font-bold">Index</p>
				</a >
				<a href={catalogUrl} className="mx-2 hover:text-red-500">
					<p className="font-bold">Catalog</p>
				</a>
				[
				{
					customBoardNavigation.map(board => (
						<a key={board} href={`https://boards.4chan.org/${board}/`} className="mx-2 hover:text-red-500 font-bold">
							{board.toLocaleLowerCase()}
						</a>
					))
				}
				]
			</div >
			<button
				onClick={toggleSettingsPopup}
				className="bg-chanBlue hover:bg-chanRed text-white font-bold rounded text-sm focus:outline-none focus:shadow-outline px-0.5 py-0.5"
			>
				<p>Settings</p>
			</button>
			{
				settingsVisible && (
					<div className="absolute right-0 mt-2">
						<SettingsPopup onClose={toggleSettingsPopup} />
					</div>
				)
			}
		</div >
	)
}

export default Header
