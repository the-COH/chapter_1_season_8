# liquidNFTs - COH
## Boosting Intrinsic Value in NFTs Through Burn-to-Withdraw and Staking

Introducing **liquidNFTs**, a groundbreaking standard extension and dApp that revolutionizes the world of Non-Fungible Tokens (NFTs) by unlocking and amplifying their intrinsic value. With liquidNFTs, you can **say goodbye to concerns about scams and dropping collection floor prices**.

![image](https://github.com/agsola/liquidNFTs/assets/472079/8ae8785e-21f2-4ec2-8a43-2ef31bdb8a13)


By combining the power of the "burn-to-withdraw" and staking, liquidNFTs establishes a unique synergy that transcends the mere artistic and community appeal of NFTs. It **empowers NFT owners** to not only enjoy the benefits of owning rare digital assets and participating in vibrant communities but also venture into a whole new realm of economic possibilities.

Through the "**burn-to-withdraw**" mechanism, users have the ability to reclaim their initial investment along with a portion of the generated yield, offering a compelling incentive to hold onto their NFTs. Furthermore, by seamlessly integrating **LSDs** (Liquid Staking Derivaties, like sCanto by BLOTR PROTOCOL), liquidNFTs provides users with the opportunity to **increase the value of their NFTs over time and generate additional yield**. Currently, sCANTO offers an APY of 8.61%, which is quite high for the purpouse.

With liquidNFTs, purchasing an NFT from a collection goes beyond mere ownership; it becomes a gateway to **yield generation** and **risk mitigation**. Creators can confidently set higher prices for their NFTs, knowing that the risks for collectors have been effectively eliminated. This enables creators to focus on delivering exceptional value to their collections and fostering a robust and thriving community of NFT enthusiasts.

## dApp link

https://liquidnfts.site/


## DEMO VIDEO

https://www.youtube.com/watch?v=lUnHzch1CoQ

## PRESENTATION SLIDES

https://docs.google.com/presentation/d/15uJHea_Otp3nlebEcT-BwhZgXAO2qzJcri0-ogiL6C4/view

## Verified Contract Addresses

App is deployed both on mainnet and testnet.

- Mainnet LiquidNFTs: https://tuber.build/address/0xA0d24c5578E267440bD1Aab7BE665Ada6B6fa343/contracts#address-tabs
- Testnet LiquidNFTs: https://testnet.tuber.build/address/0xF565195c5dbe5Efc2D066Fe56D4F7ed27a9a5DFF

## What is liquidNFTs?

**liquidNFTs** is an all-encompassing platform that serves a dual purpose.

**Firstly**, it provides users with a user-friendly and comprehensive platform to effortlessly **create, deploy, and manage their NFT collections**. Best of all, this platform is available to users completely free of charge.

**Secondly**, liquidNFTs introduces a groundbreaking **paradigm of DeFi NFTs** through the integration of staking and burn-to-withdraw mechanisms. With liquidNFTs, concerns about scams and questionable projects become a thing of the past.

![image](https://github.com/agsola/liquidNFTs/assets/472079/84204eed-1551-4cdf-aee7-63165fc63aae)


Now, let's delve into some of the fantastic features that make liquidNFTs truly unique.


## Key Aspects of liquidNFTs
liquidNFTs introduces several key aspects that shape its innovative approach to NFTs and DeFi. Let's explore these features in more detail:


### Burn-to-withdraw
liquidNFTs implements a unique "**burn-to-withdraw**" mechanism that allows users to reclaim a portion of their initial investment by burning their NFTs. The amount refunded depends on the timing of the burn, with early burners receiving at least 80% of the initial price paid. This incentivizes users to hold onto their NFTs and delay the burn process, as they stand to benefit from both the accrued value and the initial value of early burners. By providing a safety net for NFT purchasers, liquidNFTs offers enhanced confidence and liquidity within the ecosystem.

When burning an NFT in liquidNFTs, the amount received upon withdrawal is determined by several factors:

1.  **Duration of NFT Hold**: liquidNFTs incorporates a penalty system based on the length of time an NFT has been held. The collection creator defines a penalty time frame (e.g., a year) and a penalty percentage (e.g., 5%). Initially, only the higher penalty (5%) applies at the time of minting. Over time, the penalty percentage linearly reduces until it is completely removed (e.g., after a year). This incentivizes users to hold onto their NFTs for an extended period, as they can benefit from reduced penalties. This increases the collection floor price. 
Also, the longer an NFT is held, the more value it accumulates (as the value is staked). Time becomes a crucial factor in determining the amount received upon burning an NFT, as the value of the NFT grows over time. This also encourages to hold the NFTs for long time.

2.  **Order of Burn**: The number of people who have burned the NFT also impacts the amount received. If you are among the first to burn, you will incur the maximum penalty. Conversely, if you are one of the last to burn, not only will you avoid penalties, but you will also receive rewards derived from a portion of the penalties imposed on early burners. Additionally, you will benefit from the generated yield during the holding period. This encourages to hold the NFTs for long time.

3.  **Penalties and Fees**: The creator of the collection can set specific penalties and fees associated with burning and minting the NFT. Lower penalties and fees result in a higher return for the burner, incentivizing collectors to choose collections with more favorable terms.

![image](https://github.com/agsola/liquidNFTs/assets/472079/72363c1b-3f67-4c14-ace4-fa4c781697b6)

These three factors collectively contribute to the final amount refunded when an NFT is burned in liquidNFTs. By carefully considering these aspects, users can strategically navigate the burn-to-withdraw process to optimize their returns and maximize the benefits of holding their NFTs.

### Staking
liquidNFTs harnesses the power of the DeFi ecosystem and liquid staking tokens on (or even bridged to) Canto, providing users with a robust staking mechanism that generates a high yield. The yield will depend on the staking token used. By integrating staking into the liquidNFTs, NFT holders have the opportunity to actively participate in the growth and value appreciation of their NFT holdings. Unlike traditional scenarios where NFTs may gradually lose value over time, liquidNFTs flips the script by enabling NFTs to accrue value over time through staking. We not only stake the minting fee but also enable manual and automatic reinvestment to auto-compound the yield of the underlying NFT value (only applies on future liquid staking that rebase on Canto, like lido stETH on Ethereum).

When users mint the NFTs, they indirectly contribute to the overall ecosystem and play a vital role in its development. In return for their participation, NFT holders receive rewards based on the value they add. This alignment of interests between NFT holders and the liquidNFTs community fosters a vibrant and engaged user base, where users are incentivized to actively support and contribute to the success of the platform.

Through the powerful combination of staking and NFT ownership, liquidNFTs empowers users to not only enjoy the aesthetic and community aspects of their NFTs but also actively generate additional income and enhance the value of their digital assets.


### Early-Burning Penalties

liquidNFTs introduces a nuanced early-burning penalty system that accounts for both the duration of NFT ownership and the order in which burn transactions occur. Let's explore these aspects in more detail:

**Penalties Based on Duration:**
Users who choose to burn their NFTs before a designated penalty time frame will face a penalty percentage. The penalty percentage gradually reduces over time, promoting a long-term holding mentality. For example, at the time of minting, an initial penalty percentage may apply (e.g., 5%). However, this penalty reduces linearly as the NFT is held, and after a specified period, the penalty is entirely removed. This structure incentivizes users to hold onto their NFTs for an extended duration, as they can benefit from reduced penalties.

**Penalties Based on Burn Order:**
The order in which NFTs are burned also plays a crucial role in the penalty system. Early burners, who choose to burn their NFTs sooner, may face higher penalties compared to those who hold onto their NFTs for a more extended period. This mechanism further encourages users to delay the burning process, as they can avoid more significant penalties and potentially receive additional rewards.

**Rewards for Late Burners:**
Late burners, who hold their NFTs for a more extended duration, are rewarded for their commitment. They receive a portion of the penalties incurred by early burners, allowing them to benefit from the penalties imposed on those who burned their NFTs prematurely. Additionally, late burners may also receive rewards in the form of yield generated over time from their contributions to the liquidNFTs ecosystem. These rewards serve as an incentive for users to support the project's growth and actively engage with the community.

![image](https://github.com/agsola/liquidNFTs/assets/472079/5cbe8dd0-81a4-4e23-83b1-ec6faf18b75a)


By combining penalties based on duration and burn order, liquidNFTs establishes a comprehensive early-burning penalty system. This approach fosters a sustainable NFT ecosystem, encourages long-term ownership, and rewards late burners for their commitment and contribution to the NFT collection.

### Unlimited Minting Price
liquidNFTs introduces an innovative approach to minting NFTs by offering users the **flexibility to set their own minting price** within a specified range. While there is a ***minimum minting price*** to ensure the value of the NFT, **there is no maximum limit**, enabling users to mint their NFTs at a higher price if they choose to do so.

Every NFT minted within a collection holds a *percentage of stakes* from the collection. The exact percentage of stakes assigned to each NFT is determined by the minting price and the value of the collection at the time of minting. This approach ensures that every participant, regardless of when they enter the collection, holds a proportionate share of the collection's value.

For example, if a user mints an NFT when the collection has already accrued rewards and increased in value, they would receive the same absolute value as early participants but a lower percentage of stakes. This mechanism allows for a dynamic distribution of ownership and ensures that latecomers have the opportunity to participate in the collection's growth while maintaining a proportional share.

Also, it gives flexibility to the collection owner to change price over time, as the current owners won't suffer penalties if the price is higher or lower.

With the *unlimited minting price* feature and the ***proportional stakes system***, liquidNFTs creates a fair and inclusive environment where users can mint NFTs at their desired price point while ensuring a balanced distribution of ownership and value within the collection.

### Reusing Burned NFTs
liquidNFTs introduces an innovative concept that allows burned NFTs to be reused. When an NFT is burned, its unique characteristics and attributes are retained, enabling creators to resurrect or reissue those NFTs in the future. This concept opens up exciting possibilities for creators to reintroduce popular or special edition NFTs, breathe new life into their collections, and engage their community in unique ways.

Users who leave the collection won't harm the rest, not letting the collection die if people start to burn-to-withdraw.

These key aspects form the foundation of liquidNFTs, enhancing the economic value, liquidity, and sustainability of NFTs within the platform.

### Fund your NFT

This feature allows NFT owners to increase their investment in their token and thus increase their percentage share in the project and future yield generation. 

### Withdraw your rewards

This feature allows NFT owners to individually withdraw both rewards they have generated so far through staking or excess of investment, leaving at minimum the underneath mint price value on the NFT. Their global stakes will be reduced according to the new investment. Penalties also apply during early withdrawals. This will depend on whether the underlying token does a rebase process or not, which may require using an Oracle.


### Contract Secured Revenue

Levereging on Canto's Contract Secured Revenue (CSR), we allow the collection owner to earn extra revenue just from the interactions of the users with the NFT collection contract.

![image](https://github.com/agsola/liquidNFTs/assets/472079/1fcb193d-a0c2-48b3-9590-408b1dce5114)


## Benefits of liquidNFTs
### Benefits for Collectors
liquidNFTs revolutionizes the NFT experience for collectors, offering a range of benefits that enhance their ownership and participation in the ecosystem:

1.  **Intrinsic Economic Value**: Through the burn-to-withdraw feature, collectors can reclaim their initial investment and even earn additional rewards based on the duration of their NFT ownership. This introduces a unique dimension of intrinsic economic value to NFTs, making them not only collectible artworks but also potential sources of financial growth.

2.  **Reduced Risk and Increased Trust**: The burn-to-withdraw mechanism mitigates the risk of losing money on NFT purchases. Collectors have the option to burn their NFTs and receive a refund, ensuring a safety net and fostering trust in the liquidNFTs ecosystem.

3.  **Opportunity for Yield Generation**: By staking their NFTs through the Canto staking mechanisms, collectors can actively participate in the growth of their NFT holdings and earn rewards based on their contribution. This incentivizes long-term ownership and encourages collectors to actively engage in the liquidNFTs community, creating better and bigger NFT communities.

![image](https://github.com/agsola/liquidNFTs/assets/472079/55621b7f-3ad4-4600-8fba-b73cf0f0c1a2)


### Benefits for Creators
liquidNFTs provides a host of benefits for creators, empowering them to unlock new opportunities and maximize the value of their NFT collections:

1.  **No more low floor prices**: With the ability for users to mint-to-withdraw their tokens for actual value, the floor price of NFTs in a collection will always be higher than the withdrawable value. This eliminates concerns about low floor prices and instills confidence in both creators and collectors.

2.  **Enhanced Marketability**: liquidNFTs makes it easier to attract NFT collectors, even at a higher ticket price, as the risks are minimized and there are compelling benefits associated with holding the NFTs. Creators can showcase their collections with confidence, knowing that the value of their NFTs is backed by their intrinsic worth and the additional benefits provided by liquidNFTs.

3.  **Royalties from Secondary Sales**: Creators can earn royalties from the secondary sales of their NFTs. As more people choose to mint NFTs at a higher ticket price, and the floor price of the collection increases, the secondary sale market becomes more valuable. This ensures that creators continue to benefit from the increasing value and demand for their artwork, creating a sustainable long-term revenue stream.

4.  **Optional Commission from Mints**: Creators have the flexibility to set an optional commission from every mint within their collection. This allows them to earn additional revenue from each new NFT minted. By offering this commission structure, creators can further monetize their collections and incentivize minters to engage with their NFTs.

5.  **Innovation and Differentiation**: liquidNFTs empowers creators to innovate and differentiate their NFT collections. The unique features of "burn-to-withdraw" and staking functionality set liquidNFTs apart in the market, providing creators with the opportunity to offer novel experiences and value propositions to their collectors. This enables creators to establish a distinct brand identity within the competitive NFT space.   


liquidNFTs empowers creators to monetize their artistic talent, engage with a vibrant community, and capitalize on the continuous growth of the NFT market. With its innovative features and comprehensive platform, liquidNFTs offers a robust ecosystem where creators can thrive and realize the full potential of their NFT collections.


### Revamping the Canto Ecosystem

liquidNFTs brings a wave of transformation to the Canto ecosystem, fostering innovation, security, and accessibility. The integration of Canto unique precompiles features allows liquidNFTs to contribute to the overall growth and enhancement of the Canto ecosystem in the following ways.

1.  **High Value as Collateral**: The utilization of liquidNFTs as collateral provides a new dimension to the Canto NFT ecosystem. Creators can leverage the high intrinsic value of their liquidNFTs to access borrowing opportunities, unlocking liquidity and expanding their financial capabilities within the Canto network.

2.  **Risk-Zero Lending**: With the burn-to-withdraw mechanism, liquidNFTs eliminates the risks associated with traditional lending. This risk-zero lending feature creates a secure borrowing environment within the Canto ecosystem, instilling confidence and promoting financial growth for participants.

3.  **Revamped NFT Marketplaces**: liquidNFTs introduces a new movement within the NFT market, which in turn revitalizes the Canto ecosystem. The integration of liquidNFTs's innovative functionalities brings a fresh wave of interest and participation, attracting a diverse range of creators and collectors to engage within the Canto network.

4.  **ERC-721Fi - New ERC-721 Standard Extension**: liquidNFTs's extension of the ERC-721 standard promotes openness and inclusivity within the Canto ecosystem. By providing an accessible definition and implementation, liquidNFTs encourages developers and users to explore the potential of this new extension, fostering collaboration, interoperability, and a thriving blockchain community.

Through its revolutionary features, liquidNFTs actively contributes to the evolution and revitalization of the Canto ecosystem, creating a dynamic and secure environment that enables users to explore new possibilities, maximize their assets, and drive the future growth of the network.


## Authors
- [@agsola](https://github.com/agsola)
- [@nicolasmarin](https://github.com/nicolasmarin)
  
## Feedback


If you have any feedback / suggestions, please reach out to us at [liquidNFTs@agsola.com](mailto:liquidNFTs@agsola.com)

  
## Follow us

* [Website](https://liquidnfts.site/)
* [Twitter](https://twitter.com/liquidnfts_site)

