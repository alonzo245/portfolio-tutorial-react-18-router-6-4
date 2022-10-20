export const mobileThreshold = 800;
export const MOBILE_MQ = `@media (max-width: ${mobileThreshold}px)`;
export const DESKTOP_MQ = `@media (min-width: ${mobileThreshold}px)`;
export const MOBILE = 'MOBILE' as const;
export const DESKTOP = 'DESKTOP' as const;
