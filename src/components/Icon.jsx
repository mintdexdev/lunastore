export default function Icon({ name }) {
  if (!name) return null;
  const iconName = name === true ? "crop_free" : name;

  return <span className='material-symbols-outlined'>{iconName}</span>
}
