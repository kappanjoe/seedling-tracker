import React, { Fragment } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid';
import { Popover, Switch, Listbox, Transition } from '@headlessui/react';
import { useSeedContext } from '../../contexts';
import { ImportExport } from '../ImportExport';

interface Props {

}

export const Toolbar: React.FC<Props> = () => {
	const { preferences, savePrefs } = useSeedContext();

	function saveTheme(newTheme: string) {
		savePrefs({
			...preferences,
			theme: newTheme
		});
	}
	
	function saveLabels() {
		savePrefs({
			...preferences,
			labelsOn: !preferences.labelsOn
		});
	}

	function saveSeeds() {
		savePrefs({
			...preferences,
			seedsOn: !preferences.seedsOn,
			doCountSeeds: preferences.seedsOn && preferences.doCountSeeds
		});
	}

	function saveCount() {
		savePrefs({
			...preferences,
			doCountSeeds: !preferences.doCountSeeds
		});
	}

	return (
		<header className='Toolbar transition-colors'>
			{/* <div className='IOButtonWrapper'>
				<ImportExport/>
			</div> */}
			<div className='Title'>
			  	<p>
					<span>Deco Tracker</span>
			  	</p>
			</div>
			<div className='Menu'>
				<Popover>
					{({ open }) => (
					<>
						<Popover.Button>
							<AdjustmentsHorizontalIcon />
						</Popover.Button>
						<Transition
							as={ Fragment }
							enter="transition ease-out duration-200"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
								<Popover.Overlay className="PopoverBackdrop fixed inset-0 backdrop-blur"/>
						</Transition>
						<Transition
							as={ Fragment }
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1">
								<Popover.Panel className="transition-colors absolute left-1/2 mt-8 w-screen max-w-sm -translate-x-1/2 transform px-4 text-base font-medium">
									<div className="PopoverMenu transition-colors rounded-lg shadow-xl">
										<div className= "relative grid gap-8 p-7">
											<div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out">
												<p className="flex shrink-0 items-center justify-center">
													Theme mode
												</p>
												<Listbox
													value={ preferences.theme }
													onChange={ saveTheme }>
													<div className={ 'ListboxContainer relative ml-auto' }>
														<Listbox.Button
															className={ 'transition-colors relative w-40 rounded-lg py-2 pl-3 pr-10 text-left shadow-md' }>
																{ preferences.theme[0].toUpperCase() + preferences.theme.slice(1) }
														</Listbox.Button>
														<Transition
															as={Fragment}
															enter="transition ease-in duration-40"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="transition ease-in duration-40"
															leaveFrom="opacity-100"
															leaveTo="opacity-0">
																<Listbox.Options
																	className={ 'absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base text-left shadow-lg z-30' }>
																		<Listbox.Option
																			key="dark"
																			className={({ active }) =>
																				`relative cursor-default select-none py-2 pl-2 ${
																					active ? 'bg-emerald-300/10' : ''
																				}`
																			}
																			value="dark">
																				Dark
																		</Listbox.Option>
																		<Listbox.Option
																			key="light"
																			className={({ active }) =>
																				`relative cursor-default select-none py-2 pl-2 ${
																					active ? 'bg-emerald-300/10' : ''
																				}`
																			}
																			value="light">
																				Light
																		</Listbox.Option>
																		<Listbox.Option
																			key="system"
																			className={({ active }) =>
																				`relative cursor-default select-none py-2 pl-2 ${
																					active ? 'bg-emerald-300/10' : ''
																				}`
																			}
																			value="system">
																				System (Auto)
																		</Listbox.Option>
																</Listbox.Options>
														</Transition>
													</div>
												</Listbox>
											</div>
											<div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out">
												<p className="flex shrink-0 items-center justify-center">
													Show color labels
												</p>
												<Switch
													checked={ preferences.labelsOn }
													onClick={ saveLabels }
													className={ `${preferences.labelsOn ? 'bg-emerald-600' : 'bg-gray-300'}
														relative inline-flex h-[24pt] w-[44pt] shrink-0 cursor-pointer
														rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ml-auto`}>
														<span className='sr-only'>Show color labels</span>
														<span aria-hidden="true"
															className={`${preferences.labelsOn ? 'translate-x-[20pt]' : 'translate-x-0'}
																pointer-events-none inline-block h-[21pt] w-[21pt] transform
																rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}/>
												</Switch>
											</div>
											<div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out">
												<p className="flex shrink-0 items-center justify-center">
													Track unhatched seeds
												</p>
												<Switch
													checked={ preferences.seedsOn }
													onClick={ saveSeeds }
													className={ `${preferences.seedsOn ? 'bg-emerald-600' : 'bg-gray-300'}
														relative inline-flex h-[24pt] w-[44pt] shrink-0 cursor-pointer
														rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ml-auto`}>
														<span className='sr-only'>Track unhatched seeds</span>
														<span aria-hidden="true"
															className={`${preferences.seedsOn ? 'translate-x-[20pt]' : 'translate-x-0'}
																pointer-events-none inline-block h-[21pt] w-[21pt] transform
																rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}/>
												</Switch>
											</div>
											{
												preferences.seedsOn &&
													<div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out">
														<p className="flex shrink-0 items-center justify-center">
															Include unhatched in count
														</p>
														<Switch
															checked={ preferences.doCountSeeds }
															onClick={ saveCount }
															className={ `${preferences.doCountSeeds ? 'bg-emerald-600' : 'bg-gray-300'}
																relative inline-flex h-[24pt] w-[44pt] shrink-0 cursor-pointer
																rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ml-auto`}>
																<span className='sr-only'>Include unhatched in count</span>
																<span aria-hidden="true"
																	className={`${preferences.doCountSeeds ? 'translate-x-[20pt]' : 'translate-x-0'}
																		pointer-events-none inline-block h-[21pt] w-[21pt] transform
																		rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}/>
														</Switch>
													</div>
											}
										</div>
									</div>
								</Popover.Panel>
						</Transition>
					</>
					)}
				</Popover>
			</div>
		</header>
	);
}