import RoutesTable from "./RoutesTable";

export interface IRoute {
    uuid: string;
    address: string;
    mask?: string;
    gateway: string;
    iface: string;
}

const routes: IRoute[] = [
    {
        uuid: "6b47e3f4-9f81-4bba-b7d9-167277b2c6ba",
        address: "192.168.1.0",
        mask: "255.255.255.0",
        gateway: "192.168.1.1",
        iface: "Подключение Ethernet",
    },
    {
        uuid: "d1347fbe-889a-4878-83d1-afc1d841b62f",
        address: "10.0.0.0",
        mask: "255.255.255.0",
        gateway: "0.0.0.0",
        iface: "Гостевая сеть",
    },
    {
        uuid: "22d53543-95ce-42c0-848e-dfcdcae6ac44",
        address: "172.16.0.0",
        mask: "255.255.240.0",
        gateway: "172.16.0.1",
        iface: "Домашняя сеть",
    },
    {
        uuid: "a1ffc2c7-fc4e-44b3-b5b8-a3e94e7a4990",
        address: "192.168.2.0",
        mask: "255.255.255.0",
        gateway: "192.168.2.1",
        iface: "Подключение Ethernet",
    },
    {
        uuid: "b5347f5e-9a09-4dbe-832d-f78962ac39a6",
        address: "198.51.100.0",
        mask: "255.255.255.0",
        gateway: "198.51.100.1",
        iface: "Подключение Ethernet",
    },
    {
        uuid: "cc9c5251-bc0b-4637-8834-56de307c4e58",
        address: "203.0.113.0",
        mask: "255.255.255.0",
        gateway: "203.0.113.1",
        iface: "Подключение Ethernet",
    },
    {
        uuid: "e9f192b7-67aa-4dac-bc69-dba70a1e5b0e",
        address: "192.0.2.0",
        mask: "255.255.255.0",
        gateway: "192.0.2.1",
        iface: "Подключение Ethernet",
    },
    {
        uuid: "4c1ace88-49c1-4fda-ade7-5ccbbfd6d8b5",
        address: "192.168.3.0",
        mask: "255.255.255.0",
        gateway: "192.168.3.1",
        iface: "Подключение Ethernet",
    },
];

export default function RoutesSection() {
    return (
        <div className="">
            <RoutesTable data={routes} />
        </div>
    );
}
