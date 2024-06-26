/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "HabitStakingPlatform",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HabitStakingPlatform__factory>;
    getContractFactory(
      name: "Habitude",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Habitude__factory>;

    getContractAt(
      name: "HabitStakingPlatform",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.HabitStakingPlatform>;
    getContractAt(
      name: "Habitude",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Habitude>;

    deployContract(
      name: "HabitStakingPlatform",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.HabitStakingPlatform>;
    deployContract(
      name: "Habitude",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Habitude>;

    deployContract(
      name: "HabitStakingPlatform",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.HabitStakingPlatform>;
    deployContract(
      name: "Habitude",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Habitude>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
