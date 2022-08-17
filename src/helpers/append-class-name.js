function appendClassName(currentClassName, classNameToAppend) {
	if (classNameToAppend != null && classNameToAppend != '') {
		return `${currentClassName} ${classNameToAppend}`;
	} else {
		return currentClassName;
	}
}

export default appendClassName;
