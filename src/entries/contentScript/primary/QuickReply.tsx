import React from "react"
import Draggable from "react-draggable"

const QuickReply = () => {
	return (
		<Draggable handle=".handle">
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="bg-white p-6 rounded-xl shadow-md space-y-4 w-1/3 handle">
					<div className="flex justify-between items-center">
						<label className="flex items-center">
							<input type="checkbox" id="autohide" title="Auto-hide" />
							<span className="ml-2">Quick Reply</span>
						</label>
						<button className="font-bold">X</button>
					</div>
					<form>
						<div className="flex justify-between">
							<input name="name" placeholder="Name" className="border p-2 w-1/3" />
							<input name="email" placeholder="Options" className="border p-2 w-1/3" />
							<input name="sub" placeholder="Subject" className="border p-2 w-1/3" />
						</div>
						<div className="mt-4">
							<textarea name="com" placeholder="Comment" className="w-full border p-2"></textarea>
						</div>
						<div className="mt-4">
							<button type="button" className="border p-2">Get Captcha</button>
							<input id="t-resp" name="t-response" placeholder="Type the CAPTCHA here" className="border p-2 ml-2" />
						</div>
						<div className="mt-4">
							<input type="submit" value="Submit" className="bg-blue-500 text-white p-2 cursor-pointer" />
						</div>
					</form>
				</div>
			</div>
		</Draggable>
	)
}

export default QuickReply
