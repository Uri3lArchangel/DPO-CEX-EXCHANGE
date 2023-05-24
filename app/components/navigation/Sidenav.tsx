"use client";
import React, { useState } from "react";
import { BsHouse } from "react-icons/bs";
import { GrCurrency } from "react-icons/gr";
import { MdCurrencyExchange } from "react-icons/md";
import { IoReceiptSharp } from "react-icons/io5";
import sideNav from "@/app/styles/root/scss/root.module.scss";
import Link from "next/link";
import { CiMenuKebab } from 'react-icons/ci'
import { GiCancel } from "react-icons/gi";
import { Tooltip } from "antd";

const Sidenav = () => {
  const [isOpened,setOpened]=useState(true)
  const show_hide = (e: React.MouseEvent<HTMLLIElement>) => {
    if(isOpened){
      (document.getElementById("nav") as HTMLDivElement).classList.remove("animate-open");
    (document.getElementById("nav") as HTMLDivElement).classList.add("animate-close")
 
    setOpened(false)
    }else{
      (document.getElementById("nav") as HTMLDivElement).classList.remove("animate-close");
      (document.getElementById("nav") as HTMLDivElement).classList.add("animate-open");
    
      setOpened(true)
    }
  };
  return (
    <nav id="nav" className={sideNav.Container}>
      <ul>
        <Tooltip placement="right" title="Exchange">
          <li>
            <Link href={"/"}>
              <MdCurrencyExchange size={25} />
            </Link>
          </li>
        </Tooltip>
        <Tooltip placement="right" title="Fiat-Portal">
          <li>
            <Link href={"fiat-portal"}>
              <GrCurrency size={25} />
            </Link>
          </li>
        </Tooltip>
        <Tooltip placement="right" title="DPO Website">
          <li>
            <Link href={"https://directprivateoffers.net"} target="_blank">
              <BsHouse size={25} />
            </Link>
          </li>
        </Tooltip>
        <Tooltip placement="right" title="TX Receipts">
          <li>
            <Link
              href={"https://receipts.directprivateoffers.com"}
              target="_blank"
            >
              <IoReceiptSharp size={25} />
            </Link>
          </li>
        </Tooltip>
       {isOpened? <Tooltip placement="right" title="Hide Menu">
          <li onClick={show_hide}>
            <Link href={""}>
              <GiCancel size={25} />
            </Link>
          </li>
        </Tooltip>:<Tooltip placement="right" title="Show Menu">
          <li onClick={show_hide}>
            <Link href={""}>
              <CiMenuKebab size={25} />
            </Link>
          </li>
        </Tooltip>}
      </ul>
    </nav>
  );
};

export default Sidenav;
