import React, { useState, Fragment } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Structure } from '../../App';
import { Convert } from '../../seeds-structure';

interface Prop {
	userMem: Structure;
}

export const ImportExport: React.FC<Prop> = (props) => {
	const { userMem } = props;

	const [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}

	let base64 = require('base-64');
	let utf8 = require('utf8');

	const [isCopied, setIsCopied] = useState(false);
	async function pasteUserMemToClipboard() {
		const bytes = utf8.encode(JSON.stringify(userMem));
		const b64String = base64.encode(bytes);

		navigator.clipboard.writeText(b64String).then(() => {
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		}).catch((err) => {
			console.log(err);
		});
	}

	const [importText, setImportText] = useState("");
	const [importDidError, setImportDidError] = useState(false);
	function updateImportText(event: any) {
		setImportText(event.target.value);
	}
	function importUserMem() {
		const utf8String = utf8.encode(importText);
		const base64String = base64.decode(utf8String);

		try {
			const newUserMem = Convert.toUserMem(utf8.decode(base64String));

			localStorage.clear();
			localStorage.setItem("info", JSON.stringify(newUserMem.info));
			localStorage.setItem("decorations", JSON.stringify(newUserMem.decorations));
			localStorage.setItem("categories", JSON.stringify(newUserMem.categories));
			localStorage.setItem("groups", JSON.stringify(newUserMem.groups));
			window.location.reload();
		}
		catch (e: any) {
			console.log(e);
			setImportDidError(true);
			setTimeout(() => {
				setImportDidError(false);
			}, 2000);
		}
	}
	
	return (
		<>
			<div className ="IOButton">
				<button
					type="button"
					onClick={openModal}
					className=""
				>
					<ArrowDownTrayIcon />
				</button>
			</div>

			<Transition appear show={ isOpen } as={ Fragment }>
				<Dialog as="div" className="relative z-20" onClose={ closeModal }>
					<Transition.Child
						as={ Fragment }
						enter="ease-out duration-200"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="DialogBackdrop fixed inset-0 backdrop-blur" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={ Fragment }
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Dialog.Panel className="DialogBox transition-all overflow-hidden rounded-lg shadow-xl w-full max-w-md transform p-6 text-left align-middle">
									<Dialog.Title className="text-lg font-medium leading-6">
										Import / Export Data
									</Dialog.Title>

									<div className='mt-2'>
										<p className='text-sm'>
											To Export decoration save data for backup or transfer, press "Export" to copy data to clipboard.
											To Import data, paste into box below and press "Import." User preferences (e.g., count method setting) will be reset on Import.
										</p>
									</div>

									<textarea
										className="mt-4 p-2 w-full h-40 rounded-md resize-none"
										placeholder="Paste data here for Import..."
										onChange={ updateImportText }
									/>

									<div className="ButtonContainer mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md relative rounded-lg shadow-md px-4 py-2 mr-2 hover:bg-emerald-300/10"
											onClick={ importUserMem }
										>
											{ importDidError? "Invalid Data" : "Import" }
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md relative rounded-lg shadow-md px-4 py-2 mr-4 hover:bg-emerald-300/10"
											onClick={ pasteUserMemToClipboard }
										>
											{ isCopied? "Copied!" : "Export" }
										</button>
										<button
											type="button"
											className="inline-flex font-bold justify-center rounded-md relative rounded-lg shadow-md px-4 py-2 hover:bg-red-500/10"
											onClick={ closeModal }
										>
											Exit
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}