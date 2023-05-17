import styles from './Avatar.module.css';

interface AvatarProps {
  hasBorder: boolean;
  src: string;
}



export function Avatar(props: AvatarProps) {
  return (
    <img 
    className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={props.src}
    />
  );
}