const hre = require('hardhat');

async function main() {

    const factory = await hre.ethers.getContractFactory('V3Fees');
    const contract = await factory.deploy([])

    await contract.deployed();

    console.log('Contract deployed to:', contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
