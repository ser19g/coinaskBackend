import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type AddPortfolioTransactionBodyParam = FromSchema<typeof schemas.AddPortfolioTransaction.body>;
export type AddPortfolioTransactionMetadataParam = FromSchema<typeof schemas.AddPortfolioTransaction.metadata>;
export type AddPortfolioTransactionResponse200 = FromSchema<typeof schemas.AddPortfolioTransaction.response['200']>;
export type GetBlockchainsResponse200 = FromSchema<typeof schemas.GetBlockchains.response['200']>;
export type GetCoinAvgPriceMetadataParam = FromSchema<typeof schemas.GetCoinAvgPrice.metadata>;
export type GetCoinByIdMetadataParam = FromSchema<typeof schemas.GetCoinById.metadata>;
export type GetCoinByIdResponse200 = FromSchema<typeof schemas.GetCoinById.response['200']>;
export type GetCoinChartByIdMetadataParam = FromSchema<typeof schemas.GetCoinChartById.metadata>;
export type GetCoinExchangePriceMetadataParam = FromSchema<typeof schemas.GetCoinExchangePrice.metadata>;
export type GetCoinExchangePriceResponse200 = FromSchema<typeof schemas.GetCoinExchangePrice.response['200']>;
export type GetCoinsMetadataParam = FromSchema<typeof schemas.GetCoins.metadata>;
export type GetCoinsResponse200 = FromSchema<typeof schemas.GetCoins.response['200']>;
export type GetCurrenciesResponse200 = FromSchema<typeof schemas.GetCurrencies.response['200']>;
export type GetExchangeBalanceBodyParam = FromSchema<typeof schemas.GetExchangeBalance.body>;
export type GetExchangeBalanceResponse200 = FromSchema<typeof schemas.GetExchangeBalance.response['200']>;
export type GetExchangeSyncStatusMetadataParam = FromSchema<typeof schemas.GetExchangeSyncStatus.metadata>;
export type GetExchangeSyncStatusResponse200 = FromSchema<typeof schemas.GetExchangeSyncStatus.response['200']>;
export type GetExchangeTransactionsMetadataParam = FromSchema<typeof schemas.GetExchangeTransactions.metadata>;
export type GetExchangeTransactionsResponse200 = FromSchema<typeof schemas.GetExchangeTransactions.response['200']>;
export type GetExchangesResponse200 = FromSchema<typeof schemas.GetExchanges.response['200']>;
export type GetFiatCurrenciesResponse200 = FromSchema<typeof schemas.GetFiatCurrencies.response['200']>;
export type GetMarketCapResponse200 = FromSchema<typeof schemas.GetMarketCap.response['200']>;
export type GetNewsByIdMetadataParam = FromSchema<typeof schemas.GetNewsById.metadata>;
export type GetNewsByIdResponse200 = FromSchema<typeof schemas.GetNewsById.response['200']>;
export type GetNewsByTypeMetadataParam = FromSchema<typeof schemas.GetNewsByType.metadata>;
export type GetNewsByTypeResponse200 = FromSchema<typeof schemas.GetNewsByType.response['200']>;
export type GetNewsMetadataParam = FromSchema<typeof schemas.GetNews.metadata>;
export type GetNewsResponse200 = FromSchema<typeof schemas.GetNews.response['200']>;
export type GetNewsSourcesResponse200 = FromSchema<typeof schemas.GetNewsSources.response['200']>;
export type GetNftCollectionAssetByTokenidMetadataParam = FromSchema<typeof schemas.GetNftCollectionAssetByTokenid.metadata>;
export type GetNftCollectionAssetByTokenidResponse200 = FromSchema<typeof schemas.GetNftCollectionAssetByTokenid.response['200']>;
export type GetNftCollectionAssetsByAddressMetadataParam = FromSchema<typeof schemas.GetNftCollectionAssetsByAddress.metadata>;
export type GetNftCollectionAssetsByAddressResponse200 = FromSchema<typeof schemas.GetNftCollectionAssetsByAddress.response['200']>;
export type GetNftCollectionByAddressMetadataParam = FromSchema<typeof schemas.GetNftCollectionByAddress.metadata>;
export type GetNftCollectionByAddressResponse200 = FromSchema<typeof schemas.GetNftCollectionByAddress.response['200']>;
export type GetNftsByWalletMetadataParam = FromSchema<typeof schemas.GetNftsByWallet.metadata>;
export type GetNftsByWalletResponse200 = FromSchema<typeof schemas.GetNftsByWallet.response['200']>;
export type GetPortfolioChartMetadataParam = FromSchema<typeof schemas.GetPortfolioChart.metadata>;
export type GetPortfolioChartResponse200 = FromSchema<typeof schemas.GetPortfolioChart.response['200']>;
export type GetPortfolioCoinsMetadataParam = FromSchema<typeof schemas.GetPortfolioCoins.metadata>;
export type GetPortfolioCoinsResponse200 = FromSchema<typeof schemas.GetPortfolioCoins.response['200']>;
export type GetPortfolioTransactionsMetadataParam = FromSchema<typeof schemas.GetPortfolioTransactions.metadata>;
export type GetPortfolioTransactionsResponse200 = FromSchema<typeof schemas.GetPortfolioTransactions.response['200']>;
export type GetTickerExchangesResponse200 = FromSchema<typeof schemas.GetTickerExchanges.response['200']>;
export type GetTickerMarketsMetadataParam = FromSchema<typeof schemas.GetTickerMarkets.metadata>;
export type GetTickerMarketsResponse200 = FromSchema<typeof schemas.GetTickerMarkets.response['200']>;
export type GetTrendingNftsMetadataParam = FromSchema<typeof schemas.GetTrendingNfts.metadata>;
export type GetTrendingNftsResponse200 = FromSchema<typeof schemas.GetTrendingNfts.response['200']>;
export type GetWalletBalanceMetadataParam = FromSchema<typeof schemas.GetWalletBalance.metadata>;
export type GetWalletBalanceResponse200 = FromSchema<typeof schemas.GetWalletBalance.response['200']>;
export type GetWalletBalancesMetadataParam = FromSchema<typeof schemas.GetWalletBalances.metadata>;
export type GetWalletBalancesResponse200 = FromSchema<typeof schemas.GetWalletBalances.response['200']>;
export type GetWalletSyncStatusMetadataParam = FromSchema<typeof schemas.GetWalletSyncStatus.metadata>;
export type GetWalletSyncStatusResponse200 = FromSchema<typeof schemas.GetWalletSyncStatus.response['200']>;
export type GetWalletTransactionsMetadataParam = FromSchema<typeof schemas.GetWalletTransactions.metadata>;
export type GetWalletTransactionsResponse200 = FromSchema<typeof schemas.GetWalletTransactions.response['200']>;
export type TransactionsSyncMetadataParam = FromSchema<typeof schemas.TransactionsSync.metadata>;
export type TransactionsSyncResponse200 = FromSchema<typeof schemas.TransactionsSync.response['200']>;