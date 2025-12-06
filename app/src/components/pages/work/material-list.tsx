"use client";

import Modal from "@/components/ui/modal";
import { useState } from "react";

export default function MaterialList() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <span
                className="text-primary underline inline-block cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                comprehensive list
            </span>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Material list"
                size="md"
            >
                <ul className="flex flex-col gap-3">
                    <li>ULTEM™</li>
                    <li>PEEK</li>
                    <li>Torlon®</li>
                    <li>ESD Polycarbonate</li>
                    <li>Teflon</li>
                    <li>Vespel®</li>
                    <li>Rexolite®</li>
                    <li>C-STOCK AK / AK-500</li>
                </ul>
            </Modal>
        </>
    );
}
