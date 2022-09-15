import React from 'react';

export default function useOnWindowResize(callback) {
	const listener = React.useRef(null);

	React.useEffect(() => {
		if (listener.current)
			window.removeEventListener('resize', listener.current);
		listener.current = window.addEventListener('resize', callback);
		return () => {
			window.removeEventListener('resize', listener.current);
		};
	}, [callback]);
}

export function useDeviceTypeChanged(deviceCallback) {
	useOnWindowResize(() => {
		if (window.innerWidth >= 1440) {
			deviceCallback('desktop');
		} else if (window.innerWidth >= 900) {
			deviceCallback('tablet');
		} else {
			deviceCallback('mobile');
		}
	});
}
