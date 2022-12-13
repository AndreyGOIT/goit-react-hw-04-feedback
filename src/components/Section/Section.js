const sectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
  padding: '20px 16px',
  gap: 15,
};
export const Section = ({ children }) => {
  return <div style={sectionStyles}>{children}</div>;
};
