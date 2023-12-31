import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config";
import { download } from "../assets";
import state from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
	ColorPicker,
	CustomButton,
	FilePicker,
	Tab,
	AIPicker,
} from "../components";

const Customizer = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					<motion.div
						key='custom'
						className='absolute top-0 left-0 z-10  '
						{...slideAnimation("left")}>
						<div className='flex  items-center min-h-screen'>
							<div className='editortabs-container tabs'>
								{EditorTabs.map((tab, index) => (
									<Tab key={tab.name} tab={tab} handleClick={() => {}} />
								))}
							</div>
						</div>
					</motion.div>

					<motion.div
						key='custom'
						{...fadeAnimation}
						className='absolute top-5 right-5 z-10'>
						<CustomButton
							handleClick={() => (state.intro = true)}
							type='filled'
							title='Go Back'
							customStyles='w-fit px-4 py-2.5 font-bold text-sm'
						/>
					</motion.div>

					<motion.div
						className='filtertabs-container '
						{...slideAnimation("up")}>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								handleClick={() => {}}
								isFilterTab
								isActiveTab=''
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
