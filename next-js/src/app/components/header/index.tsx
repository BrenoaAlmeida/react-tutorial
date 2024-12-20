import Link from "next/link";
import styles from "@/app/components/header/header.module.css"

export function Header(){
    return(
        <header className={styles.header}>
            <h1>Meu Site</h1>
            <Link href={"/"}>Home </Link>
            <Link href={"/repositorios"}>Repositorios</Link>            

            <br/><br/>
            <hr/>
        </header>
    )
}