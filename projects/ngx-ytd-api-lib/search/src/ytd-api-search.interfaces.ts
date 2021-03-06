import { NgxYtdApiGenericOpts, NgxYtdApiGenericResource } from 'ngx-ytd-api/common';

export interface NgxYtdApiSearchListOpts extends NgxYtdApiGenericOpts {
  /**
   * The channel ID to search videos from
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#channelId for more info
   */
  channelId?: string;
  /**
   * Restricts a search to a particular type of channel.
   * Acceptable values:
   * - `any` - Return all channels
   * - `show` - Only return shows
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#channelType for more info
   */
  channelType?: 'any' | 'show';
  /**
   * Restricts a search to broadcast events
   * Note: If a value is specified for this parameter, the parameter `type`'s value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#eventType for more info
   */
  eventType?: 'completed' | 'live' | 'upcoming';
  /**
   * See https://developers.google.com/youtube/v3/docs/search/list#location for more info
   */
  location?: string;
  /**
   * See https://developers.google.com/youtube/v3/docs/search/list#locationRadius for more info
   */
  locationRadius?: string;
  /**
   * Maximum results for video searching
   * Allowed values: 0 - 50
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#maxResults for more info
   */
  maxResults?: number;
  /**
   * Used for specifying the order of resources in the response.
   * Default value: `relevance`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#order for more info
   */
  order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount';
  /**
   * The page token to get a response from
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#pageToken for more info
   */
  pageToken?: string;
  /**
   * The query to search for
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#q for more info
   */
  q: string;
  /**
   * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#publishedAfter for more info
   */
  publishedAfter?: string;
  /**
   * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#publishedBefore for more info
   */
  publishedBefore?: string;
  /**
   * The parameter tells the API to return search results for videos that can be viewed in the specific country.
   *
   * Allowed values:
   * an [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm|)
   * country code.
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#regionCode for more info
   */
  regionCode?: string;
  /**
   * This parameter tells the API to return search results that are most relevant to the specified language.
   *
   * Allowed values:
   * an [ISO 639-1 two-letter language code](http://www.loc.gov/standards/iso639-2/php/code_list.php)
   *
   * However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese.
   *
   * Note: Results in other languages will still be returned if they are highly relevant to the search query term.
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#regionCode for more info
   */
  relevanceLanguage?: string;
  /**
   * Indicates whether the search results should include restricted content as well as standard content.
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#safeSearch for more info
   */
  safeSearch?: 'moderate' | 'none' | 'strict';
  /**
   * See https://developers.google.com/youtube/v3/docs/search/list#topicId for more info
   */
  topicId?: string;
  /**
   * Restricts a search query to only return certain resources
   * Note: The value is of a comma-seperated list of resource types.
   *
   * Default value (if not specified): `video,channel,playlist`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#type for more info
   */
  type?: string;
  /**
   * Whether the API should filter video search results based on whether they have captions.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoCaption for more info
   */
  videoCaption?: 'any' | 'closedcaption' | 'none';
  /**
   * Filters video search results based on their category.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoCategoryId for more info
   */
  videoCategoryId?: string;
  /**
   * Restricts a search to only include either high definition/standard definition videos.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoDefinition for more info
   */
  videoDefinition?: 'any' | 'high' | 'standard';
  /**
   * Restricts a search to only retrieve 2D or 3D videos.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoDimension for more info
   */
  videoDimension?: 'any' | '2d' | '3d';
  /**
   * Filters video search results based on their duration.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoDuration for more info
   */
  videoDuration?: 'any' | 'long' | 'medium' | 'short';
  /**
   * Restricts a search to only videos that can be embedded on a webpage.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoEmbeddable for more info
   */
  videoEmbeddable?: 'any' | 'true';
  /**
   * Filters videos to only include videos with a particular license.
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoLicense for more info
   */
  videoLicense?: 'any' | 'creativeCommon' | 'youtube';
  /**
   * Whether to restrict a search to only videos that can be played outside of youtube.com
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoSyndicated for more info
   */
  videoSyndicated?: 'any' | 'true';
  /**
   * Restrict a search to a particular type of videos
   *
   * Note: the `type` parameter's value must be set to `video`
   *
   * See https://developers.google.com/youtube/v3/docs/search/list#videoType for more info
   */
  videoType?: 'any' | 'episode' | 'movie';

}

export interface NgxYtdApiSearchResourceThumbnails {
  [key: string]: NgxYtdApiSearchResourceThumbnail;
}
export interface NgxYtdApiSearchResourceThumbnail {
  /**
   * The URL of the thumbnail
   *
   * See https://developers.google.com/youtube/v3/docs/search#snippet.thumbnails.(key).url for more info
   */
  url?: string;
  /**
   * The width of the thumbnail
   *
   * See https://developers.google.com/youtube/v3/docs/search#snippet.thumbnails.(key).width for more info
   */
  width?: number;
  /**
   * The height of the thumbnail
   *
   * See https://developers.google.com/youtube/v3/docs/search#snippet.thumbnails.(key).height for more info
   */
  height?: number;
}

/**
 * @deprecated Use {@link NgxYtdApiSearchResourceThumbnail} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiSearchListResultItemThumbnail extends NgxYtdApiSearchResourceThumbnail { }

/**
 * @deprecated Use {@link NgxYtdApiSearchResourceThumbnails} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiSearchListResultItemThumbnails extends NgxYtdApiSearchResourceThumbnails { }

export interface NgxYtdApiSearchResource extends NgxYtdApiGenericResource {
  /**
   * The id object contains info which can be used for uniquely identifing the resource
   *
   * See https://developers.google.com/youtube/v3/docs/search#id for more info
   */
  id?: {
    /**
     * The type of the API resource
     *
     * See https://developers.google.com/youtube/v3/docs/search#id.kind for more info
     */
    kind?: string;
    /**
     * This property will be present if the `id.kind` property is set to `youtube#video`
     *
     * See https://developers.google.com/youtube/v3/docs/search#id.videoId for more info
     */
    videoId?: string;
    /**
     * This property will be present if the `id.kind` property is set to `youtube#channel`
     *
     * See https://developers.google.com/youtube/v3/docs/search#id.channelId for more info
     */
    channelId?: string;
    /**
     * This property will be present if the `id.kind` property is set to `youtube#playlist`
     *
     * See https://developers.google.com/youtube/v3/docs/search#id.playlistId for more info
     */
    playlistId?: string;
  };
  /**
   * The `snippet` object contains info on the search result
   */
  snippet?: {
    /**
     * The creation date and time of the resource. The value is specified in ISO 8601 `(YYYY-MM-DDThh:mm:ss.sZ)` format.
     */
    publishedAt?: string | any;
    /**
     * The channel's ID
     */
    channelId?: string;
    /**
     * The title of the search result
     */
    title?: string;
    /**
     * A description of the search result
     */
    description?: string;
    /**
     * An object of the thumbnails
     */
    thumbnails?: NgxYtdApiSearchResourceThumbnails;
    /**
     * The title of the channel that published the resource
     */
    channelTitle?: string;
    /**
     * See https://developers.google.com/youtube/v3/docs/search#snippet.liveBroadcastContent for more info
     */
    liveBroadcastContent?: 'upcoming' | 'live' | 'none';
  };
}

/**
 * @deprecated Use {@link NgxYtdApiSearchResource} instead
 */
// tslint:disable-next-line:no-empty-interface
export interface NgxYtdApiSearchListResultItem extends NgxYtdApiSearchResource { }

// Result interfaces
export interface NgxYtdApiSearchListResult extends NgxYtdApiGenericResource {
  /**
   * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
   */
  nextPageToken?: string;
  /**
   * The token that can be used as the value of the `pageToken` parameter to retrieve the previous page in the result set.
   */
  prevPageToken?: string;
  /**
   * The region code used for the search query.
   */
  regionCode?: string;
  /**
   * Paging info about the result
   */
  pageInfo?: {
    /**
     * Total results. Note that the max value is `1000000` and is approximate.
     */
    totalResults?: number;
    /**
     * Number of results included in response
     */
    resultsPerPage?: number;
  };
  /**
   * An array of results that match the criteria
   */
  items?: NgxYtdApiSearchResource[];
}
