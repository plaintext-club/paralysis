import React from "react";

import {
	Select,
	MenuItem
} from "@material-ui/core";

const GpioSelect = function({ changeHandler: handleChange }) {
	return (
		<>
			<Select
				onChange={handleChange}
			>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={6}>6</MenuItem>
				<MenuItem value={7}>7</MenuItem>
				<MenuItem value={8}>8</MenuItem>
				<MenuItem value={9}>9</MenuItem>
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={11}>11</MenuItem>
				<MenuItem value={12}>12</MenuItem>
				<MenuItem value={13}>13</MenuItem>
				<MenuItem value={14}>14</MenuItem>
				<MenuItem value={15}>15</MenuItem>
				<MenuItem value={16}>16</MenuItem>
				<MenuItem value={17}>17</MenuItem>
				<MenuItem value={18}>18</MenuItem>
				<MenuItem value={19}>19</MenuItem>
				<MenuItem value={20}>20</MenuItem>
				<MenuItem value={21}>21</MenuItem>
				<MenuItem value={22}>22</MenuItem>
				<MenuItem value={23}>23</MenuItem>
				<MenuItem value={24}>24</MenuItem>
				<MenuItem value={25}>25</MenuItem>
				<MenuItem value={26}>26</MenuItem>
				<MenuItem value={27}>27</MenuItem>
			</Select>
		</>
	);
};

export default GpioSelect;
