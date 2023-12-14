import { useState } from "react";
import CardContent from "../components/Card-Content";
import CarouselWithContent from "../components/Carrousel";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

export default function HomePage() {
    return (
        <>

            <Navbar />
            <CarouselWithContent />
            <Categories/>
            <CardContent/>
            <Pagination/>
        </>
    )
}