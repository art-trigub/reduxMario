import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import LanguageIcon from "@material-ui/icons/Language";

import { toggleMode } from "../../../store/actions/userSettigns";
import { setLang } from "../../../store/actions/userSettigns";

function LangSelector({ setLang, colorValue, toggleRtlMode, rtlMode }) {
	const { i18n } = useTranslation();
	const { t } = useTranslation();

	const changeLanguage = (event) => {
		i18n.changeLanguage(event.target.value);
		setLang(event.target.value);
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	function switchRtl() {
		toggleRtlMode(!rtlMode);
	}

	// var userLang = navigator.language || navigator.userLanguage;

	return (
		<>
			<IconButton
				style={{ color: colorValue }}
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<LanguageIcon></LanguageIcon>
			</IconButton>
			<Menu
				id="langSelector"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Box p={1}>
					<FormLabel component="legend">{t("lang")}</FormLabel>
					<RadioGroup
						aria-label="language"
						value={i18n.language}
						onChange={changeLanguage}
					>
						<FormControlLabel
							onClick={handleClose}
							value="en"
							name="language"
							label="English"
							defaultChecked
							control={<Radio />}
						/>
						<FormControlLabel
							onClick={handleClose}
							value="ru"
							name="language"
							label="Русский"
							control={<Radio />}
						/>
					</RadioGroup>
					<FormLabel>{t("rtl")}</FormLabel>
					<Switch
						color="secondary"
						checked={rtlMode}
						onChange={switchRtl}
					/>
				</Box>
			</Menu>
		</>
	);
}

function mapStateToProps({ userSettings }) {
	return {
		rtlMode: userSettings.rtlMode,
	};
}

const mapDispatchToProps = {
	setLang: setLang,
	toggleRtlMode: toggleMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector);
