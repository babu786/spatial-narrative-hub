export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  
  // Check for touch capability and screen size
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  
  // Check user agent for mobile patterns
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUserAgent = mobileRegex.test(navigator.userAgent);
  
  return (hasTouchScreen && isSmallScreen) || isMobileUserAgent;
};

export const handleCallClick = (phoneNumber: string, onDesktopModal?: () => void) => {
  if (isMobileDevice()) {
    window.location.href = `tel:${phoneNumber}`;
  } else if (onDesktopModal) {
    onDesktopModal();
  }
};