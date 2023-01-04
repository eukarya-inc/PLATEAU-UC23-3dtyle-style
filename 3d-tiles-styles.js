reearth.ui.show(
    `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto Sans">
  <style>
      html,
      body {
          margin: 0;
          /* Change here for your specific plugin's width */
          overflow: hidden;
          max-height: 750px;
          display: block;
      }
  
      #wrapper {
          display: block;
          gap: 20px;
          background: #171618;
          overflow: hidden;
          padding-bottom: 20px;
      }
  
      .section .extendedh,
      .extendedh {
          width: 100%;
          cursor: pointer;
      }
  
      .section .extendedv,
      .extendedv {
          height: 100%;
      }
  
      #wrapper {
          box-sizing: border-box;
      }
  
      .extendedh body,
      .extendedh #wrapper {
          width: 46px;
          border-radius: 4px;
      }
  
      .extendedv body,
      .extendedv #wrapper {
          height: 46px;
      }
  
      .height-46 {
          height: 46px;
          width: 46px;
          border-radius: 4px;
          min-height: 46px !important;
      }
  
      /* width */
      ::-webkit-scrollbar {
          width: 0px;
      }
  
      /* Track */
      ::-webkit-scrollbar-track {
          background: #28272f;
      }
  
      /* Handle */
      ::-webkit-scrollbar-thumb {
          background: #171618;
      }
  
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
          background: #171618;
      }
  
      p,
      h3,
      span,
      label {
          color: #bfbfbf;
      }
  
      label {
          position: relative;
      }
  
      label:before {
          content: "";
          position: absolute;
          left: 92px;
          top: 0px;
          bottom: 0px;
          width: 16px;
          background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.53558 0.572266H6.46415C6.36891 0.572266 6.32129 0.619885 6.32129 0.715123V6.32227H1.00028C0.905041 6.32227 0.857422 6.36988 0.857422 6.46512V7.53655C0.857422 7.63179 0.905041 7.67941 1.00028 7.67941H6.32129V13.2866C6.32129 13.3818 6.36891 13.4294 6.46415 13.4294H7.53558C7.63081 13.4294 7.67843 13.3818 7.67843 13.2866V7.67941H13.0003C13.0955 7.67941 13.1431 7.63179 13.1431 7.53655V6.46512C13.1431 6.36988 13.0955 6.32227 13.0003 6.32227H7.67843V0.715123C7.67843 0.619885 7.63081 0.572266 7.53558 0.572266Z' fill='white'/%3E%3C/svg%3E%0A") center / contain no-repeat;
      }
  
      #title {
          font-family: "Roboto" !important;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 22px;
          margin: 0px;
          height: 21px;
          background: #171618;
          border-radius: 4px 4px 0px 0px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 500;
          padding-left: 12px;
          display: flex;
          align-items: center;
          justify-content: start;
          padding-top: 10px;
          cursor: pointer;
      }
  
      span#logo {
          position: relative;
          top: 2px;
          margin-right: 14px;
      }
  
      span#closed-logo svg {
          margin-top: 3px;
      }
  
      .group-title {
          width: calc(100% - 24px);
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          margin-bottom: 12px;
          margin-top: 12px;
      }
  
      .group-title p {
          margin: 0px 8px;
      }
  
      .input-title {
          display: block;
          overflow: hidden;
          font-size: 12px;
          line-height: 16px;
          padding: 8px 0px 8px 0px;
          width: 100px;
          margin: 0px;
          float: left;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 500;
          line-height: 16px;
      }
  
      input[type="number"],
      input[type="text"],
      select {
          width: 70.5px;
          background: transparent;
          border: 1px solid #4a4a4a;
          height: 23px;
          color: #c7c5c5;
          font-size: 12px;
          padding-left: 7px;
          float: right;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
      }
  
      .filter-wrapper {
          height: auto;
          border: 1px solid #595959;
      }
  
      /* Chrome, Safari, Edge, Opera */
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }
  
      /* Firefox */
      input[type=number] {
          -moz-appearance: textfield;
      }
  
      *:focus {
          outline: none;
      }
  
      select {
          width: 47px;
          height: 27px;
          margin-left: -1px;
          margin-right: 8px;
      }
  
      .filter-item-wrapper span.filter-item-del-btn {
          margin-left: 4px;
      }
  
      .filter-item-operator {
          width: 45px;
      }
  
      .guide {
          display: block;
          width: 100%;
          font-size: 12px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          margin-bottom: 10px;
      }
  
      .blue-btn {
          text-align: center;
          color: #ffffff;
          background: #3b3cd0;
          border: solid 1px #3b3cd0;
          box-shadow: 0px 2px 0px rgb(0 0 0 / 2%);
          border-radius: 4px;
          padding: 7px;
          height: 30px;
          width: 100%;
          cursor: pointer;
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
  
      button {
          display: inline-block;
      }
  
      .separator {
          display: flex;
          align-items: center;
          margin-left: 12px;
          margin-right: 12px;
      }
  
      .separator .line {
          height: 1px;
          flex: 1;
          background-color: #4a4a4a;
      }
  
      .separator h2 {
          padding: 0 1px;
      }
  
      #btn-wrapper {
          margin-top: 10px;
      }
  
      .form-group {
          margin: 0;
          position: static;
          display: block;
          overflow: hidden;
      }
  
      span.maru {
          position: relative;
          left: 145px;
          top: 8px;
          font-size: 12px;
          color: #4a4a4a;
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
      }
  
      span.arrow {
          position: relative;
          left: 190px;
          top: -25px;
          font-size: 20px;
          color: #4a4a4a;
      }
  
      select {
          appearance: none;
      }
  
      select:-moz-focusring {
          color: transparent;
          text-shadow: 0 0 0 #000;
      }
  
      #general .form-group {
          margin-bottom: 5px;
      }
  
      span#close:hover {
          cursor: pointer;
      }
  
      div.path-body {
          padding: 0px 8px;
      }
  
      .path-header {
          width: 100%;
          display: flex;
          justify-items: stretch;
          justify-content: space-between;
          border-bottom: 1px solid #595959;
          margin-bottom: 8px;
      }
  
      span.remove-path {
          margin-top: 6px;
          margin-right: 10px;
          cursor: pointer;
      }
  
      span.path-title {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          margin: 4px 2px;
          height: 22px;
          padding-left: 8px;
      }
  
      #close {
          box-sizing: border-box;
          position: relative;
          display: block;
          transform: scale(var(--ggs, 1));
          width: 22px;
          height: 22px;
          border: 2px solid transparent;
          border-radius: 40px;
          left: 152px;
          top: 0px;
          color: #595959;
      }
  
      #close::after,
      #close::before {
          content: "";
          display: block;
          box-sizing: border-box;
          position: absolute;
          width: 16px;
          height: 2px;
          background: currentColor;
          transform: rotate(45deg);
          border-radius: 5px;
          top: 8px;
          left: 1px;
      }
  
      #close::after {
          transform: rotate(-45deg);
      }
  
      .condition-wrapper span.down-ar {
          left: 41px;
      }
  
      span.down-ar {
          overflow: hidden;
          position: relative;
          top: 4px;
          left: 40px;
          height: 9px;
          width: 9px;
      }
  
      #closed-logo {
          display: none;
          overflow: hidden;
          width: 21px;
          height: 21px;
          cursor: pointer;
          margin-top: 11px;
          margin-left: 12px;
          background: #181618;
          padding: 5px;
          border-radius: 5px;
      }
  
      input[type="color"] {
          border: none;
          width: 27px;
          height: 27px;
          margin-left: 25px;
          padding: 0px;
      }
  
      input[type="color"]::-webkit-color-swatch-wrapper {
          padding: 0;
      }
  
      input[type="color"]::-webkit-color-swatch {
          border: none;
      }
  
      form#data-form {
          margin-left: 12px;
          margin-right: 12px;
      }
  
      .form-group-inline {
          overflow: hidden;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          display: flex;
          margin-left: 15px;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 4px;
      }
  
      span.filter-item-del-btn {
          margin-left: 8px;
      }
  
      .filter-group {
          border-left: 1px solid #C7C5C5;
          margin-left: 15px;
          margin-bottom: 10px;
      }
  
      span.filter-label {
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          margin: 8px;
          display: block;
      }
  
      .add-filter-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          margin-left: 15px;
          margin-top: 8px;
          width: 14px;
          cursor: pointer;
          color: #bfbfbf;
  
          background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.53558 0.0722656H6.46415C6.36891 0.0722656 6.32129 0.119885 6.32129 0.215123V5.82227H1.00028C0.905041 5.82227 0.857422 5.86988 0.857422 5.96512V7.03655C0.857422 7.13179 0.905041 7.17941 1.00028 7.17941H6.32129V12.7866C6.32129 12.8818 6.36891 12.9294 6.46415 12.9294H7.53558C7.63081 12.9294 7.67843 12.8818 7.67843 12.7866V7.17941H13.0003C13.0955 7.17941 13.1431 7.13179 13.1431 7.03655V5.96512C13.1431 5.86988 13.0955 5.82227 13.0003 5.82227H7.67843V0.215123C7.67843 0.119885 7.63081 0.0722656 7.53558 0.0722656Z' fill='%23C7C5C5'/%3E%3C/svg%3E%0A") center / contain no-repeat;
      }
  
      button#add-filter-group-btn {
          margin-left: 8px;
          margin-bottom: 8px;
          padding: 4px;
          width: 24px;
          height: 24px;
          background: #3B3CD0;
          border-radius: 8px;
          border: none;
          cursor: pointer;
      }
  
      button#path-draw span {
          margin-right: 6px;
      }
  
      .double-btn-wrapper .blue-btn {
          width: calc(50% - 3px);
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
      }
  
      .double-btn-wrapper .blue-btn:first-child {
          background-color: transparent;
          border: 1px solid #3B3CD0;
          color: #3B3CD0;
      }
  
      .double-btn-wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
      }
  
      button#add-condition span {
          margin-right: 6px;
      }
  
      #export-style-btn {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
      }
  
      .filter-item-del-btn {
          cursor: pointer;
      }
  
      .condition-item-fs {
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
  
      .condition-item-sc {
          display: flex;
          justify-content: space-between;
          align-items: end;
      }
  
      .condition-item {
          padding: 8px;
          border: 1px solid #4A4A4A;
          margin-bottom: 8px;
      }
  
      .condition-item .form-input {
          width: 80px;
      }
  
      span.if-span {
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          margin-right: 8px;
          width: 17px;
      }
  
      input.condition-item-selected-color {
          width: 198px;
      }
  
      .condition-item-fs:first-child {
          margin-bottom: 8px;
      }
  
      .filter-group {
          display: none;
      }
  
      .filter-group-wrapper .filter-group {
          display: block;
      }
  
      .condition-item {
          display: none;
      }
  
      .condition-wrapper .condition-item {
          display: block;
      }
  
      .filter-item-del-btn {
          cursor: pointer;
      }
  
      .filter-group-wrapper,
      .condition-wrapper {
          overflow-y: scroll;
          overflow-x: hidden;
          max-height: 200px;
      }
  
      select#filter-item-combine-operator {
          width: 59px;
          text-align: left;
          padding-left: 8px;
          /* margin-left: -3px; */
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
      }
  
      .filter-item-combine-operator-wrapper {
          display: flex;
          margin-left: 7px;
          margin-bottom: 4px;
      }
  
      .filter-item-combine-operator-wrapper span.down-ar {
          left: 50px;
      }
  
      .filter-group-combine-operator-wrapper {
          display: flex;
          margin-bottom: 10px;
      }
  
      .filter-group-combine-operator {
          border: none;
          width: 56px;
          height: 29px;
          background: #3B3CD0;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          border-radius: 8px;
          color: #ffffff;
      }
  
      .filter-group-combine-operator-wrapper span.down-ar {
          left: 49px;
      }
  
      .filter-item-combine-operator {
          width: 56px;
      }
  
      .filter-item-combine-operator-wrapper,
      .filter-group-combine-operator-wrapper {
          display: none;
      }
  
      #data-form .filter-item-combine-operator-wrapper,
      #data-form .filter-group-combine-operator-wrapper {
          display: flex;
      }
  
      .select2-selection__rendered {
          width: calc(100% - 29px);
          background: #181618 !important;
          border: 1px solid #4a4a4a;
          height: 25px;
          color: #c7c5c5 !important;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          margin-top: 1px;
          font-size: 12px !important;
          line-height: 16px;
      }
  
      [title~="AND"] {
          width: calc(100% - 26px);
      }
  
      .select2-container--default {
          width: 58px !important;
      }
  
      .select2-selection__arrow {
          background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 0.5L9.5 0.5L5 5.5L0.5 0.5Z' fill='%234A4A4A'/%3E%3C/svg%3E%0A") center / contain no-repeat;
          color: #c7c5c5;
      }
  
      .select2-results__option {
          text-align: left;
          padding-left: 32px;
      }
  
      .select2-results__options,
      .select2-results__option {
          background: #181618 !important;
      }
  
      .select2-results__options {
          width: 64px;
          color: #c7c5c5 !important;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 12px !important;
          line-height: 16px;
          position: relative;
          align-items: center;
          border-top: 1px solid #4a4a4a;
      }
  
      .select2-results__option--highlighted {
          background: #3F3D45 !important;
          padding-left: 5px;
      }
  
      .select2-results__option--highlighted::before {
          content: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.35355 3.14645C1.15829 2.95118 0.841709 2.95118 0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L3.14645 6.35355C3.34171 6.54882 3.65829 6.54882 3.85355 6.35355L9.35355 0.853554C9.54882 0.658291 9.54882 0.341709 9.35355 0.146447C9.15829 -0.0488155 8.84171 -0.0488155 8.64645 0.146447L3.5 5.29289L1.35355 3.14645Z' fill='%23C7C5C5'/%3E%3C/svg%3E%0A");
          padding-right: 10px;
          padding-left: 6px;
      }
  
      .select2-results__option .select2-results__option--highlighted {
          background: #181618 !important;
          width: 200px;
      }
  
      .select2-search,
      .select2-search--dropdown {
          display: none;
      }
  
      .select2-dropdown,
      .select2-dropdown--below {
          background: #181618 !important;
          margin-left: -5px;
          border-color: #3F3D45 !important;
          border-radius: 0;
          width: 66px !important;
      }
  
      .select2,
      .select2-container,
      .select2-container--custom-select {
          margin-left: 5px;
      }
  
      .select2-selection,
      .select2-selection--single {
          background: #181618 !important;
          border: none !important;
          flex-direction: row;
          display: flex;
          width: 83px !important;
      }
  
      .select2-container--default .select2-selection--single {
          background: #181618 !important;
          color: #c7c5c5 !important;
          border: none !important;
          width: 52px !important;
          border-radius: none !important;
      }
  
      .select2-container .select2-selection--single .select2-selection__rendered {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
  
      .select2-container--default .select2-results>.select2-results__options {
          overflow-x: hidden;
      }
  
      .select2-container--default .select2-selection--single .select2-selection__arrow {
          height: 22px;
          position: absolute;
          top: 1px;
          left: 34px;
          width: 10px;
          z-index: 99;
          padding-top: 7px;
          margin-left: 3px;
      }
  
      .select2-container--default .select2-selection--single .select2-selection__arrow b {
          color: transparent;
          border-color: transparent !important;
      }
  
      .select2-results__message {
          border-top: 1px solid #4a4a4a;
          padding-left: 0px;
          margin: auto;
          text-align: center;
      }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
  <div class="height-46" id="wrapper">
      <h3 id="title">
          <span id="logo">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M19.0173 0.261719H6.96376C6.56867 0.261719 6.24948 0.580915 6.24948 0.976004V6.24386H0.98162C0.58653 6.24386 0.267334 6.56306 0.267334 6.95815V13.0296C0.267334 13.4247 0.58653 13.7439 0.98162 13.7439H13.0352C13.4303 13.7439 13.7495 13.4247 13.7495 13.0296V7.76172H19.0173C19.4124 7.76172 19.7316 7.44252 19.7316 7.04743V0.976004C19.7316 0.580915 19.4124 0.261719 19.0173 0.261719ZM7.76733 1.77958H12.2316V6.24386H7.76733V1.77958ZM6.24948 12.226H1.78519V7.76172H6.24948V12.226ZM12.2316 12.226H7.76733V7.76172H12.2316V12.226ZM18.2138 6.24386H13.7495V1.77958H18.2138V6.24386Z"
                      fill="#BFBFBF" />
              </svg>
          </span>
          <p class="title-p">3D Tiles Style</p> <span id="close" data-stt="0"></span>
      </h3>
      <div class="group-div">
          <span id="choose-marker" class="group-title separator">
              <div class="line"></div>
              <p>Show Setting</p>
              <div class="line"></div>
          </span>
      </div>
      <form id="data-form">
          <div class="filter-wrapper">
              <span class="filter-label">Filter</span>
              <div class="filter-group-wrapper" id="filter-group-wrapper">
                  <div class="filter-group" id="filter-group-0">
                      <div class="filter-item-wrapper">
                          <div class="form-group-inline filter-item" id="filter-item-0">
                              <input type="text" class="form-input filter-item-attribute"
                                  name="filter-item[0][0][attribute]" id="filter-item-attribute-0-0">
                              <div class="form-group">
                                  <select id="filter-item-operator-0-0"
                                      class="filter-item-operator operator custom-select-options"
                                      name="filter-item[0][0][operator]">
                                      <option value=">">></option>
                                      <option value="===">===</option>
                                      <option value="!==">!==</option>
                                      <option value=">=">>=</option>
                                      <option value="<=">
                                          <= </option>
                                      <option value="<">
                                          < </option>
  
                                  </select>
  
                              </div>
                              <input type="text" class="form-input filter-item-value" name="filter-item[0][0][value]"
                                  id="filter-item-value-0-0">
                              <span class="filter-item-del-btn">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.4998 3.5L2.49976 3.50001" stroke="#595959" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      <path d="M6.5 6.5V10.5" stroke="#595959" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      <path d="M9.5 6.5V10.5" stroke="#595959" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      <path
                                          d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5"
                                          stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                          d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5"
                                          stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </span>
                          </div>
                      </div>
                      <div class="add-btn">
                          <div class="add-filter-item" id="add-filter-item-btn-0" data-filter-group-id="0">
                              &nbsp&nbsp&nbsp&nbsp&nbspAdd
                          </div>
                      </div>
                  </div>
              </div>
              <button type="button" class="add-btn-blue add-filter" id="add-filter-group-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.53558 1.57227H7.46415C7.36891 1.57227 7.32129 1.61988 7.32129 1.71512V7.32227H2.00028C1.90504 7.32227 1.85742 7.36988 1.85742 7.46512V8.53655C1.85742 8.63179 1.90504 8.67941 2.00028 8.67941H7.32129V14.2866C7.32129 14.3818 7.36891 14.4294 7.46415 14.4294H8.53558C8.63081 14.4294 8.67843 14.3818 8.67843 14.2866V8.67941H14.0003C14.0955 8.67941 14.1431 8.63179 14.1431 8.53655V7.46512C14.1431 7.36988 14.0955 7.32227 14.0003 7.32227H8.67843V1.71512C8.67843 1.61988 8.63081 1.57227 8.53558 1.57227Z"
                          fill="white" />
                  </svg>
              </button>
          </div>
          <div class="group-div">
              <span id="choose-marker" class="group-title separator">
                  <div class="line"></div>
                  <p>Color Setting</p>
                  <div class="line"></div>
              </span>
          </div>
          <div class="condition-wrapper" id="condition-wrapper">
              <div class="condition-item" id="condition-item-0">
                  <div class="condition-item-fs">
                      <span class="if-span">
                          if
                      </span>
                      <input type="text" class="form-input condition-item-attr" name="condition-item[0][0][attr]"
                          id="condition-item-attr-0">
                      <div class="form-group">
                          <select class="condition-item-operator operator custom-select-options"
                              name="condition-item[0][0][operator]" id="condition-item-operator-0">
                              <option value=">">></option>
                              <option value="===">===</option>
                              <option value="!==">!==</option>
                              <option value=">=">>=</option>
                              <option value="<=">
                                  <= </option>
                              <option value="<">
                                  < </option>
                          </select>
  
                      </div>
                      <input type="text" class="form-input condition-item-value" name="condition-item[0][0][value]"
                          id="condition-item-value-0">
                  </div>
                  <div class="condition-item-sc">
                      <input type="color" class="color condition-item-color-picker" value="#FFFFFF"
                          id="condition-item-color-picker-0" name="condition-item[0][0][colorpicker]" />
                      <input type="text" class="condition-item-selected-color" id="condition-item-selected-color-0"
                          name="condition-item[0][0][selected-color]" value="#FFFFFF" />
                      <span class="filter-item-del-btn">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.4998 3.5L2.49976 3.50001" stroke="#595959" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              <path d="M6.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M9.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                              <path
                                  d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5"
                                  stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                              <path
                                  d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5"
                                  stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </span>
                  </div>
              </div>
          </div>
          <label for="add-condition">
              <input type="button" class="blue-btn" id="add-condition" value="Condition" />
          </label>
  
          <div class="group-div">
              <span id="choose-marker" class="group-title separator">
                  <div class="line"></div>
                  <div class="line"></div>
              </span>
          </div>
          <div class="double-btn-wrapper">
              <button type="button" class="blue-btn" id="remove-style-btn">
                  Remove style file
              </button>
              <button type="button" class="blue-btn" id="apply-style-btn">
                  Apply style file
              </button>
          </div>
          <button type="button" class="blue-btn" id="export-style-btn">
              Export style file
          </button>
      </form>
  </div>
  
  <div class="filter-group" id="filter-group">
      <div class="filter-item-wrapper">
          <div class="form-group-inline filter-item" id="filter-item">
              <input type="text" class="form-input filter-item-attribute" id="filter-item-attribute">
              <div class="form-group">
                  <select id="filter-item-operator" class="filter-item-operator custom-select-options"
                      name="filter-item-operator">
                      <option value=">">></option>
                      <option value="===">===</option>
                      <option value="!==">!==</option>
                      <option value=">=">>=</option>
                      <option value="<=">
                          <= </option>
                      <option value="<">
                          < </option>
                  </select>
              </div>
              <input type="text" class="form-input filter-item-value" id="filter-item-value">
              <span class="filter-item-del-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4998 3.5L2.49976 3.50001" stroke="#595959" stroke-linecap="round"
                          stroke-linejoin="round" />
                      <path d="M6.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                          d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5"
                          stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                          d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5"
                          stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </span>
          </div>
      </div>
      <div class="add-btn">
          <div class="add-filter-item" id="add-filter-item-btn-0" data-filter-group-id="0">
              &nbsp&nbsp&nbsp&nbsp&nbspAdd
          </div>
      </div>
  </div>
  
  <div class="condition-item" id="condition-item">
      <div class="condition-item-fs">
          <span class="if-span">
              if
          </span>
          <input type="text" class="form-input condition-item-attr" name="condition-item[temp][attr]"
              id="condition-item-attr">
          <div class="form-group">
              <select class="condition-item-operator custom-select-options" name="condition-item[temp][operator]"
                  id="condition-item-operator">
                  <option value=">">></option>
                  <option value="===">===</option>
                  <option value="!==">!==</option>
                  <option value=">=">>=</option>
                  <option value="<=">
                      <= </option>
                  <option value="<">
                      < </option>
              </select>
          </div>
          <input type="text" class="form-input condition-item-value" name="condition-item[temp][value]"
              id="condition-item-value">
      </div>
      <div class="condition-item-sc">
          <input type="color" class="color condition-item-color-picker" value="#FFFFFF" id="condition-item-color-picker"
              name="condition-item[temp][colorpicker]" />
          <input type="text" class="condition-item-selected-color" id="condition-item-selected-color"
              name="condition-item[temp][selected-color]" value="#FFFFFF" />
          <span class="filter-item-del-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4998 3.5L2.49976 3.50001" stroke="#595959" stroke-linecap="round"
                      stroke-linejoin="round" />
                  <path d="M6.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                      d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5"
                      stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                      d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5"
                      stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </span>
      </div>
  </div>
  
  <div class="filter-item-combine-operator-wrapper" id="filter-item-combine-operator-wrapper">
      <div class="form-group">
          <select id="filter-item-combine-operator" class="filter-item-combine-operator"
              name="filter-item-combine-operator">
              <option value="&&">AND</option>
              <option value="||">OR</option>
          </select>
          <span class="down-ar">
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5L9 0.5L4.5 5.5L0 0.5Z" fill="#4A4A4A" />
              </svg>
          </span>
      </div>
  </div>
  <div class="filter-group-combine-operator-wrapper" id="filter-group-combine-operator-wrapper">
      <div class="form-group">
          <select id="filter-group-combine-operator" class="filter-group-combine-operator"
              name="filter-group-combine-operator">
              <option value="&&">AND</option>
              <option value="||">OR</option>
          </select>
          <span class="down-ar">
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L9 0L4.5 5L0 0Z" fill="white" />
              </svg>
          </span>
      </div>
  </div>
  
  <body>
      <script>
          $("#filter-item-operator-0-0").select2({
              allowClear: false,
              minimumResultsForSearch: Infinity,
          });
  
          $("#condition-item-operator-0").select2({
              allowClear: false,
              minimumResultsForSearch: Infinity,
          });
  
          $("#filter-item-combine-operator-0-0").select2({
              allowClear: false,
              minimumResultsForSearch: Infinity,
          });
  
          var styleJsonData;
          let styleData;
          const REMOVE_STYLE_PARAMS_NUM = 1;
          const APPLY_STYLE_PARAMS_NUM = 2;
          //Get tile OSM or URL
          var tileset;
          var tilesetOSM;
          let allLayers;
          let itemAttributeArr = [];
  
          window.addEventListener("message", function (e) {
              if (e.source !== parent) return;
              allLayers = e.source.reearth.layers;
              getTile();
          });
  
  
          function getTile() {
              tileset = allLayers?.layers.find(tileset => tileset.type === "tileset")
              if (tileset?.property.default.sourceType === "osm") {
                  tilesetOSM = tileset
              } else {
                  tilesetOSM = null
              }
  
              if (tilesetOSM) {
                  itemAttributeArr = [
                      "cesium#color",
                      "elementType",
                      "elementId",
                      "cesium#estimatedHeight",
                      "cesium#longitude",
                      "cesium#latitude",
                      "source",
                      "building",
                      "name",
                      "addr:block_number",
                      "addr:city",
                      "addr:housenumber",
                      "addr:neighbourhood",
                      "addr:postcode",
                      "addr:province",
                      "addr:quarter",
                      "height",
                      "name:en",
                      "name:es",
                      "name:ja",
                      "name:ko",
                      "website",
                      "layer",
                      "building:levels",
                      "wikidata",
                      "wikipedia",
                      "building:material",
                      "addr:country",
                      "addr:full",
                      "addr:housename",
                      "alt_name",
                      "name:zh",
                      "building:levels:underground",
                      "start_date",
                      "addr:street",
                      "addr:suburb",
                      "type",
                      "fee",
                      "name:de",
                      "name:fr",
                      "opening_hours",
                      "operator",
                      "phone",
                      "tourism",
                      "sport",
                      "leisure",
                      "building:colour",
                      "amenity",
                      "int_name",
                      "alt_name:zh",
                      "capacity",
                      "old_name",
                      "old_name:en",
                      "old_name:es",
                      "parking",
                      "supervised",
                      "surface",
                      "fixme",
                      "roof:shape",
                      "building:part",
                      "office",
                      "power",
                      "substation",
                      "voltage",
                      "brand",
                      "website:en",
                      "shop",
                      "name:it",
                      "aeroway",
                      "baby_feeding",
                      "wheelchair",
                      "roof:height",
                      "building:roof:levels",
                      "service",
                      "name:ru",
                      "platforms",
                      "name:ja_rm",
                      "name:ja_kana",
                      "source_ref",
                      "opening_date",
                      "description",
                      "branch",
                      "brand:en",
                      "brand:ja",
                      "brand:wikidata",
                      "brand:wikipedia",
                      "ref",
                      "golf",
                      "landuse",
                      "bath:type",
                      "name:ja-Latn",
                      "heritage",
                      "toilets:wheelchair",
                      "branch:en",
                      "alt_name:ja",
                      "bus",
                      "public_transport",
                      "tunnel",
                      "name:ja-Hira",
                      "plant:source",
                      "plant:output:electricity",
                      "addr:county",
                      "note",
                      "note:ja",
                      "toilets",
                      "alt_name:en",
                      "payment:cash",
                      "changing_table",
                      "toilets:access",
                      "contact:twitter",
                      "toilets:disposal",
                      "toilets:position",
                      "changing_table:location",
                      "wikipedia:ja",
                      "attraction",
                      "building:height",
                      "part#elementType",
                      "part#elementId",
                      "part#building:levels",
                      "part#building:part",
                      "part#height",
                      "part#roof:shape",
                      "part#type",
                      "part#roof:height",
                      "part#roof:orientation",
                      "part#roof:material",
                      "part#building:colour",
                      "part#building:material",
                      "part#roof:colour",
                      "part#min_height",
                      "part#name",
                      "part#name:en",
                      "part#addr:city",
                      "part#addr:street",
                      "part#addr:block_number",
                      "part#addr:housename",
                      "part#addr:housenumber",
                      "part#addr:neighbourhood",
                      "part#addr:postcode",
                      "part#addr:province",
                      "part#addr:quarter",
                      "part#addr:suburb",
                      "part#building",
                      "part#name:es",
                      "part#name:ja",
                      "part#name:ru",
                      "part#note",
                      "part#wikidata",
                      "part#wikipedia",
                      "part#source",
                      "part#layer",
                      "part#description",
                      "part#tourism",
                      "part#website",
                      "part#alt_name",
                      "part#operator",
                      "part#name:ja_rm",
                      "part#shop",
                      "part#building:min_level",
                      "part#roof:direction",
                      "part#source:height",
                      "part#name:zh",
                      "part#opening_hours",
                      "part#roof:levels",
                      "name:pt",
                      "rugby",
                      "roof:levels",
                      "url",
                      "government",
                      "alt_name:es",
                      "roof:colour",
                      "source:height",
                      "level",
                      "man_made",
                      "bicycle_parking",
                      "covered",
                      "wikimedia_commons",
                      "survey:date",
                      "alt_name_1",
                      "alt_name:ja_1",
                      "email",
                      "rooms",
                      "stars",
                      "internet_access",
                      "contact:facebook",
                      "internet_access:fee",
                      "access",
                      "name:ca",
                      "addr:place",
                      "ferry",
                      "smoking",
                      "official_name",
                      "contact:instagram",
                      "short_name",
                      "tiger:name_base",
                      "fax",
                      "studio",
                      "train",
                      "railway",
                      "alt_name:fr",
                      "operator:en",
                      "surveillance",
                      "addr:quarter:en",
                      "addr:province:en",
                      "name:zh-Hans",
                      "lit",
                      "network",
                      "departures_board",
                      "generator:source",
                      "building:-1",
                      "name:",
                      "building:use",
                      "building:1-23",
                      "construction_year",
                      "religion",
                      "name:zh-Hant",
                      "name:zh_pinyin",
                      "name:ar",
                      "name:cs",
                      "name:fa",
                      "name:th",
                      "name:uk",
                      "source:ja",
                      "internet_access",
                      "historic",
                      "castle_type",
                      "name:yue",
                      "addr:city:en",
                      
                  ]
              } else {
                  itemAttributeArr = [
                      "_height",
                      "_lod",
                      "_x",
                      "_y",
                      "_z",
                      "_zmax",
                      "_zmin",
                      "計測高さ",
                      "LOD1立ち上げに使用する高さ",
                      "_gml_id",
                      "延べ面積換算係数",
                      "建物ID",
                      "建物構造",
                      "建物利用現況_小分類",
                      "建物利用現況_図上面積",
                      "建物利用現況_耐火構造種別",
                      "建物利用現況_地域地区",
                      "建物利用現況_中分類",
                      "江東内部河川流域浸水予想区域_想定最大規模_浸水ランク",
                      "江東内部河川流域浸水予想区域_想定最大規模_浸水深",
                      "荒川水系荒川洪水浸水想定区域_計画規模_浸水ランク",
                      "荒川水系荒川洪水浸水想定区域_計画規模_浸水深",
                      "荒川水系荒川洪水浸水想定区域_想定最大規模_継続時間",
                      "荒川水系荒川洪水浸水想定区域_想定最大規模_浸水ランク",
                      "荒川水系荒川洪水浸水想定区域_想定最大規模_浸水深",
                      "高度地区",
                      "住所",
                      "城南地区河川流域浸水予想区域（改定）_想定最大規模_継続時間",
                      "城南地区河川流域浸水予想区域（改定）_想定最大規模_浸水ランク",
                      "城南地区河川流域浸水予想区域（改定）_想定最大規模_浸水深",
                      "神田川流域浸水予想区域_想定最大規模_浸水ランク",
                      "神田川流域浸水予想区域_想定最大規模_浸水深",
                      "石神井川及び白子川流域浸水予想区域_想定最大規模_継続時間",
                      "石神井川及び白子川流域浸水予想区域_想定最大規模_浸水ランク",
                      "石神井川及び白子川流域浸水予想区域_想定最大規模_浸水深",
                      "多摩水系多摩川、浅川、大栗川洪水浸水想定区域_計画規模_浸水ランク",
                      "多摩水系多摩川、浅川、大栗川洪水浸水想定区域_計画規模_浸水深",
                      "多摩水系多摩川、浅川、大栗川洪水浸水想定区域_想定最大規模_継続時間",
                      "多摩水系多摩川、浅川、大栗川洪水浸水想定区域_想定最大規模_浸水ランク",
                      "多摩水系多摩川、浅川、大栗川洪水浸水想定区域_想定最大規模_浸水深",
                      "地下階数",
                      "地区計画",
                      "地上階数",
                      "土砂災害警戒区域",
                      "防火及び準防火地域",
                      "名称",
                      "野川、仙川、入間川、谷沢川及び丸子川流域浸水予想区域_想定最大規模_継続時間",
                      "野川、仙川、入間川、谷沢川及び丸子川流域浸水予想区域_想定最大規模_浸水ランク",
                      "野川、仙川、入間川、谷沢川及び丸子川流域浸水予想区域_想定最大規模_浸水深",
                      "用途",
                      "利根川水系江戸川洪水浸水想定区域_計画規模_浸水ランク",
                      "利根川水系江戸川洪水浸水想定区域_計画規模_浸水深",
                      "利根川水系江戸川洪水浸水想定区域_想定最大規模_継続時間",
                      "利根川水系江戸川洪水浸水想定区域_想定最大規模_浸水ランク",
                      "利根川水系江戸川洪水浸水想定区域_想定最大規模_浸水深",
                      "利根川水系利根川洪水浸水想定区域_計画規模_浸水ランク",
                      "利根川水系利根川洪水浸水想定区域_計画規模_浸水深",
                      "利根川水系利根川洪水浸水想定区域_想定最大規模_継続時間",
                      "利根川水系利根川洪水浸水想定区域_想定最大規模_浸水ランク",
                      "利根川水系利根川洪水浸水想定区域_想定最大規模_浸水深"
                  ]
              }
          }
  
  
          // Handle to get color hex from color picker
          function displayColorHex() {
              let colorPickers = document.querySelectorAll(
                  ".condition-item-color-picker"
              );
              colorPickers.forEach(function (colorPicker, ind) {
                  colorPicker.addEventListener("change", function (event) {
                      event.preventDefault();
                      colorPicker.parentNode
                          .querySelector(".condition-item-selected-color")
                          .value = event.target.value;
                  });
              });
          }
  
  
          function displayColorFromHex() {
              let colorPickers = document.querySelectorAll(
                  ".condition-item-selected-color"
              );
              colorPickers.forEach(function (colorPicker, ind) {
                  colorPicker.addEventListener("change", function (event) {
                      event.preventDefault();
                      colorPicker.parentNode
                          .querySelector(".condition-item-color-picker")
                          .value = event.target.value;
                  });
              });
          }
          // ---- Close Handle to get color hex from color picker ---------- //
  
          // Handling Creating Filter Item
          function createFilterItem(target) {
              let addFilterItemBtns = document.querySelectorAll(
                  ".filter-group-wrapper .add-filter-item"
              );
              let filterItemHTML = document.querySelector("#filter-item");
              let filterItemCombineOperatorHTML = document.querySelector(
                  "#filter-item-combine-operator-wrapper"
              );
              let filterItemsWrapperElm = document
                  .getElementById(target.id)
                  .closest(".filter-group")
                  .querySelector(".filter-item-wrapper");
              filterItemsWrapperElm.appendChild(
                  filterItemCombineOperatorHTML.cloneNode(true)
              );
              filterItemsWrapperElm.appendChild(filterItemHTML.cloneNode(true));
              generateNewFilterItemID();
              generateNewFilterItemCombineOperatorID();
              updateIframeSize();
          }
  
          // Handle events of delete/create by clicking
          function handleOnclickEvents() {
              let filterGroupWrapper = document.getElementById(
                  "filter-group-wrapper"
              );
              filterGroupWrapper.addEventListener("click", function (e) {
                  e.preventDefault();
                  let eTarget = e.target;
                  let delBtnNode;
  
                  if (eTarget.classList.contains("add-filter-item")) {
                      createFilterItem(eTarget);
                  } else if (
                      eTarget.tagName === "svg" ||
                      eTarget.tagName === "path" ||
                      (eTarget.tagName === "span" &&
                          eTarget.classList.contains("filter-item-del-btn"))
                  ) {
                      let formFroupElm = eTarget.closest(".form-group");
                      if (formFroupElm === null) {
                          delBtnNode = eTarget.parentNode;
                          let filterItem = delBtnNode.closest(".filter-item");
                          let dataFilterItemId = filterItem.getAttribute(
                              "data-filter-group-id"
                          );
                          let newdelBtnNode = document.querySelector(
                              "#filter-item-del-btn-" + dataFilterItemId
                          );
                          if (delBtnNode !== null) {
                              let filterGroup = delBtnNode.closest(".filter-group");
                              let filterGroupWrapper = document.getElementById(
                                  "filter-group-wrapper"
                              );
                              let filterItemWrapper = filterItem.closest(
                                  ".filter-item-wrapper"
                              );
                              let filterItemNum = filterGroup.querySelectorAll(
                                  ".filter-item-wrapper .filter-item"
                              ).length;
                              let filterGroupNum =
                                  filterGroupWrapper.querySelectorAll(".filter-group").length;
                              let firstElemChild = filterItemWrapper.firstElementChild.id;
                              let lastElemChild = filterItemWrapper.lastElementChild.id;
                              if (filterItemNum === 1) {
                                  if (
                                      filterGroupNum > 1 &&
                                      filterGroup.id === filterGroupWrapper.lastElementChild.id
                                  ) {
                                      let dataFilterGroupId = filterItem.getAttribute(
                                          "data-op-filter-group-id"
                                      );
                                      let newlastChar = parseInt(dataFilterGroupId) - 1;
                                      dataFilterGroupId = newlastChar;
                                      let wrapper = document.querySelector(
                                          "#filter-group-combine-operator-wrapper-" +
                                          dataFilterGroupId
                                      );
                                      if (wrapper !== null) wrapper.remove();
                                  } else {
                                      let dataFilterGroupId = filterItem.getAttribute(
                                          "data-op-filter-group-id"
                                      );
                                      let wrapper = document.querySelector(
                                          "#filter-group-combine-operator-wrapper-" +
                                          dataFilterGroupId
                                      );
                                      if (wrapper !== null) wrapper.remove();
                                  }
                                  filterGroup.remove();
                              } else {
                                  if (filterItem.id === lastElemChild) {
                                      let dataFilterItemId = filterItem.getAttribute(
                                          "data-filter-group-id"
                                      );
                                      let lastChar = dataFilterItemId.substr(
                                          dataFilterItemId.length - 1
                                      );
                                      let newlastChar = parseInt(lastChar) - 1;
                                      dataFilterItemId =
                                          dataFilterItemId.slice(0, -1) + newlastChar;
                                      document
                                          .querySelector(
                                              "#filter-item-combine-operator-wrapper-" +
                                              dataFilterItemId
                                          )
                                          .remove();
                                  } else {
                                      let dataFilterItemId = filterItem.getAttribute(
                                          "data-filter-group-id"
                                      );
                                      document
                                          .querySelector(
                                              "#filter-item-combine-operator-wrapper-" +
                                              dataFilterItemId
                                          )
                                          .remove();
                                  }
                                  filterItem.remove();
                              }
  
                              generateNewFilterItemID();
                              generateNewFilterItemCombineOperatorID();
                              generateNewFilterGroupID();
                              generateNewFilterGroupCombineOperatorID();
                              updateIframeSize();
                          }
                      } else {
                          return;
                      }
                  }
              });
          }
          // Close handle onclick of delete/create by clicking
  
          // Re-generating ID after creating filter item
          function generateNewFilterItemID() {
              let addFilterItemBtns = document.querySelectorAll(
                  ".filter-group-wrapper .add-filter-item"
              );
  
              addFilterItemBtns.forEach(function (item, ind) {
                  let filterGroup = item.closest(".filter-group");
                  let filterItems = filterGroup.querySelectorAll(".filter-item");
                  filterItems.forEach(function (filterItem, ind2) {
                      let filterItemAttr = filterItem.querySelector(
                          ".filter-item-attribute"
                      );
                      let filterItemVal = filterItem.querySelector(".filter-item-value");
                      let filterItemOperator = filterItem.querySelector(
                          ".filter-item-operator"
                      );
                      let filterItemDel = filterItem.querySelector(
                          ".filter-item-del-btn"
                      );
  
                      filterItem.setAttribute("data-op-filter-group-id", ind);
                      filterItem.setAttribute("data-filter-group-id", ind + "-" + ind2);
                      filterItem.setAttribute("id", "filter-item-" + ind + "-" + +ind2);
  
                      filterItemAttr.setAttribute(
                          "id",
                          "filter-item-attribute-" + ind + "-" + ind2
                      );
                      filterItemAttr.setAttribute(
                          "name",
                          "filter-item[" + ind + "][" + ind2 + "][attribute]"
                      );
  
                      filterItemVal.setAttribute(
                          "id",
                          "filter-item-value-" + ind + "-" + ind2
                      );
                      filterItemVal.setAttribute(
                          "name",
                          "filter-item[" + ind + "][" + ind2 + "][value]"
                      );
  
                      filterItemOperator.setAttribute(
                          "id",
                          "filter-item-operator-" + ind + "-" + ind2
                      );
                      filterItemOperator.setAttribute(
                          "name",
                          "filter-item[" + ind + "][" + ind2 + "][operator]"
                      );
  
                      filterItemDel.setAttribute(
                          "id",
                          "filter-item-del-btn-" + ind + "-" + ind2
                      );
                      $("#filter-item-operator-" + ind + "-" + ind2).select2({
                          allowClear: false,
                          minimumResultsForSearch: Infinity,
                      });
                  });
              });
          }
          // ---- Close Re-generating ID after creating filter item ---------- //
  
          // Re-generating combine-operator ID after creating filter item
          function generateNewFilterItemCombineOperatorID() {
              let addFilterItemBtns = document.querySelectorAll(
                  ".filter-group-wrapper .add-filter-item"
              );
              addFilterItemBtns.forEach(function (item, ind) {
                  let filterGroup = item.closest(".filter-group");
                  let filterItemCombineOperatorWrappers = filterGroup.querySelectorAll(
                      ".filter-item-combine-operator-wrapper"
                  );
                  filterItemCombineOperatorWrappers.forEach(function (
                      filterItemCombineOperWrapper,
                      ind2
                  ) {
                      filterItemCombineOperWrapper.setAttribute(
                          "id",
                          "filter-item-combine-operator-wrapper-" + ind + "-" + ind2
                      );
                      filterItemCombineOper = filterItemCombineOperWrapper.querySelector(
                          ".filter-item-combine-operator"
                      );
                      filterItemCombineOper.setAttribute(
                          "id",
                          "filter-item-combine-operator-" + ind + "-" + ind2
                      );
                      filterItemCombineOper.setAttribute(
                          "name",
                          "filter-item-combine[" + ind + "][" + ind2 + "][operator]"
                      );
  
                      $("#filter-item-combine-operator-" + ind + "-" + ind2).select2({
                          allowClear: false,
                          minimumResultsForSearch: Infinity,
                      });
                  });
              });
          }
          // ---- Close Re-generating combine-operator ID after creating filter item ---------- //
  
          // Re-generating combine-operator ID after creating filter item
          function generateNewFilterGroupCombineOperatorID() {
              let filterGroupCombineOperatorWrappers = document.querySelectorAll(
                  ".filter-group-wrapper .filter-group-combine-operator-wrapper"
              );
              filterGroupCombineOperatorWrappers.forEach(function (
                  filterGroupCombineOperWrapper,
                  ind
              ) {
                  filterGroupCombineOperWrapper.setAttribute(
                      "id",
                      "filter-group-combine-operator-wrapper-" + ind
                  );
                  filterGroupCombineOper = filterGroupCombineOperWrapper.querySelector(
                      ".filter-group-combine-operator"
                  );
                  filterGroupCombineOper.setAttribute(
                      "id",
                      "filter-group-combine-operator-" + ind
                  );
                  filterGroupCombineOper.setAttribute(
                      "name",
                      "filter-group-combine[" + ind + "][operator]"
                  );
              });
          }
          // ---- Close Re-generating combine-operator ID after creating filter item ---------- //
  
          // Handle Creating Filter Group
          function createFilterGroup() {
              let addFilterGroupBtn = document.querySelector("#add-filter-group-btn");
              let filterGroupWrapperElm = document.querySelector(
                  "#filter-group-wrapper"
              );
              let filterGroupCombineOperator = document.querySelector(
                  "#filter-group-combine-operator-wrapper"
              );
              let filterGroupHTML = document.querySelector("#filter-group");
              let filterGroupNum =
                  filterGroupWrapperElm.querySelectorAll(".filter-group").length;
              addFilterGroupBtn.addEventListener("click", function () {
                  event.preventDefault();
                  filterGroupNum =
                      filterGroupWrapperElm.querySelectorAll(".filter-group").length;
                  if (filterGroupNum >= 1) {
                      filterGroupWrapperElm.appendChild(
                          filterGroupCombineOperator.cloneNode(true)
                      );
                  }
                  filterGroupWrapperElm.appendChild(filterGroupHTML.cloneNode(true));
                  generateNewFilterGroupID();
                  generateNewFilterItemID();
                  generateNewFilterGroupCombineOperatorID();
                  updateIframeSize();
              });
          }
  
          // Re-generating Filter Group ID after creating filter group
          function generateNewFilterGroupID() {
              let addFilterGroups = document.querySelectorAll(
                  ".filter-group-wrapper .filter-group"
              );
              addFilterGroups.forEach(function (filterGroup, ind) {
                  let addFilterBtn = filterGroup.querySelector(".add-filter-item");
                  filterGroup.setAttribute("id", "filter-group-" + ind);
                  addFilterBtn.setAttribute("id", "add-filter-item-btn-" + ind);
                  addFilterBtn.setAttribute("data-filter-group-id", ind);
              });
          }
          // ---- Close Re-generating Filter Group ID after creating filter group ---------- //
  
          // Handle deleting filter item
          function deleteFilterItem(delBtnNode) {
              let filterGroup = delBtnNode.closest(".filter-group");
              let filterGroupWrapper = document.getElementById(
                  "filter-group-wrapper"
              );
              if (filterGroup !== null) {
                  let filterItem = filterGroup.querySelector(".filter-item");
                  let filterItemWrapper = filterItem.closest(".filter-item-wrapper");
                  let filterItemNum = filterGroup.querySelectorAll(
                      ".filter-item-wrapper .filter-item"
                  ).length;
  
                  let filterGroupNum =
                      filterGroupWrapper.querySelectorAll(".filter-group").length;
                  let firstElemChild = filterItemWrapper.firstElementChild.id;
                  let lastElemChild = filterItemWrapper.lastElementChild.id;
                  if (filterItemNum === 1) {
                      if (
                          filterGroupNum > 1 &&
                          filterGroup.id === filterGroupWrapper.lastElementChild.id
                      ) {
                          let dataFilterGroupId = filterItem.getAttribute(
                              "data-op-filter-group-id"
                          );
                          let newlastChar = parseInt(dataFilterGroupId) - 1;
                          dataFilterGroupId = newlastChar;
                          let wrapper = document.querySelector(
                              "#filter-group-combine-operator-wrapper-" + dataFilterGroupId
                          );
                          if (wrapper !== null) wrapper.remove();
                      } else {
                          let dataFilterGroupId = filterItem.getAttribute(
                              "data-op-filter-group-id"
                          );
                          let wrapper = document.querySelector(
                              "#filter-group-combine-operator-wrapper-" + dataFilterGroupId
                          );
                          if (wrapper !== null) wrapper.remove();
                      }
                      filterGroup.remove();
                  } else {
                      if (filterItem.id === lastElemChild) {
                          let dataFilterItemId = filterItem.getAttribute(
                              "data-filter-group-id"
                          );
                          let lastChar = dataFilterItemId.substr(
                              dataFilterItemId.length - 1
                          );
                          let newlastChar = parseInt(lastChar) - 1;
                          dataFilterItemId = dataFilterItemId.slice(0, -1) + newlastChar;
                          document
                              .querySelector(
                                  "#filter-item-combine-operator-wrapper-" + dataFilterItemId
                              )
                              .remove();
                      } else {
                          let dataFilterItemId = filterItem.getAttribute(
                              "data-filter-group-id"
                          );
                          document
                              .querySelector(
                                  "#filter-item-combine-operator-wrapper-" + dataFilterItemId
                              )
                              .remove();
                      }
                      filterItem.remove();
                  }
              }
              generateNewFilterItemID();
              generateNewFilterItemCombineOperatorID();
              generateNewFilterGroupID();
              generateNewFilterGroupCombineOperatorID();
              updateIframeSize();
          }
          // ---- Close Handle deleting filter item ---------- //
          let conditionLength;
  
          // Handling Creating Condition Item
          function createConditionItem() {
              let addConditionBtn = document.querySelector("#add-condition");
              addConditionBtn.addEventListener("click", function () {
                  event.preventDefault();
                  let conditionHTML = document.querySelector("#condition-item");
                  conditionLength = document.querySelectorAll(".condition-wrapper .condition-item").length
  
                  let spanText = document.querySelector("#condition-item .condition-item-fs .if-span")
                  spanText.innerHTML = conditionLength > 0 ? "else if" : "if"
  
                  let conditionWrapperElm =
                      document.querySelector("#condition-wrapper");
  
                  conditionWrapperElm.appendChild(conditionHTML.cloneNode(true));
                  deleteConditionItem();
                  generateConditionID();
                  displayColorHex();
                  displayColorFromHex()
                  updateIframeSize();
              });
          }
  
          // Handle deleting filter item
          function deleteConditionItem() {
              let addDelConditionBtns = document.querySelectorAll(
                  ".condition-wrapper .filter-item-del-btn"
              );
              addDelConditionBtns.forEach(function (item, ind) {
                  item.addEventListener("click", function () {
                      let conditionItem = item.closest(".condition-item");
                      conditionItem.remove();
                      generateConditionID();
                      let conditionArrayforDelete = document.querySelectorAll(".condition-wrapper .condition-item");
                      let st = conditionArrayforDelete[0]?.querySelector(".condition-item-fs .if-span")
                      if (st) { st.innerHTML = "if" }
                  });
              });
              updateIframeSize();
          }
          // ---- Close Handle deleting filter item ---------- //
  
          // Re-generating Filter Group ID after creating filter group
          function generateConditionID() {
              let addConditions = document.querySelectorAll(
                  ".condition-wrapper .condition-item"
              );
              addConditions.forEach(function (condition, ind) {
                  let conditionAttr = condition.querySelector(".condition-item-attr");
                  let conditionVal = condition.querySelector(".condition-item-value");
                  let conditionOpe = condition.querySelector(
                      ".condition-item-operator"
                  );
                  let conditionColor = condition.querySelector(
                      ".condition-item-color-picker"
                  );
                  let conditionSelectedColor = condition.querySelector(
                      ".condition-item-selected-color"
                  );
                  condition.setAttribute("id", "condition-item-" + ind);
                  conditionAttr.setAttribute("id", "condition-item-attr-" + ind);
                  conditionAttr.setAttribute(
                      "name",
                      "condition-item[" + ind + "][attr]"
                  );
                  conditionVal.setAttribute("id", "condition-item-value-" + ind);
                  conditionVal.setAttribute(
                      "name",
                      "condition-item[" + ind + "][value]"
                  );
                  conditionOpe.setAttribute("id", "condition-item-operator-" + ind);
                  conditionOpe.setAttribute(
                      "name",
                      "condition-item[" + ind + "][operator]"
                  );
                  conditionColor.setAttribute(
                      "id",
                      "condition-item-color-picker-" + ind
                  );
                  conditionColor.setAttribute(
                      "name",
                      "condition-item[" + ind + "][color-picker]"
                  );
                  conditionSelectedColor.setAttribute(
                      "id",
                      "condition-item-selected-color-" + ind
                  );
                  conditionSelectedColor.setAttribute(
                      "name",
                      "condition-item[" + ind + "][selected-color]"
                  );
  
                  $("#condition-item-operator-" + ind).select2({
                      allowClear: false,
                      minimumResultsForSearch: Infinity,
                  });
              });
          }
          // ---- Close Re-generating Filter Group ID after creating filter group ---------- //
  
          // ---------------------------- Handle Formdata --------------------------- //
          let filterArr = [];
          let combineArr = [];
          let colorArr = [];
  
          const matchItem = (item, array) => {
              if (array.indexOf(item) !== -1) {
                  return true;
              }
              return false
          }
  
          function getFilterGroup() {
              let result = [];
              let filterGroupCount =
                  document.querySelectorAll(".filter-group").length - 1;
  
              for (let i = 0; i < filterGroupCount; i++) {
                  result[i] = [];
                  let filterItemCount = document
                      .getElementById("filter-group-" + i)
                      .querySelectorAll(".filter-item").length;
                  for (let k = 0; k < filterItemCount; k++) {
                      result[i][k] = [];
                      if (tilesetOSM) {
                          result[i][k]["attribute"] =
                              document.getElementById("filter-item-attribute-" + i + "-" + k)
                                  .value || "height";
                      } else {
                          result[i][k]["attribute"] =
                              document.getElementById("filter-item-attribute-" + i + "-" + k)
                                  .value || "_height";
                      }
  
                      result[i][k]["operator"] =
                          document.getElementById("filter-item-operator-" + i + "-" + k)
                              .value || ">";
                      result[i][k]["value"] =
                          document.getElementById("filter-item-value-" + i + "-" + k)
                              .value || "0";
                      let logicalOperatorEle = document.getElementById(
                          "filter-item-combine-operator-" + i + "-" + k
                      );
                      if (logicalOperatorEle) {
                          result[i][k]["combine"] = logicalOperatorEle.value;
                      } else {
                          result[i][k]["combine"] = "";
                      }
                  }
              }
              return result;
          }
  
          function getFilterGroupCombine() {
              let result = [];
              let count =
                  document.querySelectorAll(".filter-group-combine-operator").length -
                  1;
  
              for (let i = 0; i < count; i++) {
                  result[i] = [];
                  result[i] =
                      document.getElementById("filter-group-combine-operator-" + i)
                          .value || ">";
              }
              return result;
          }
  
          function getColorCondition() {
              let result = [];
              let count = document.querySelectorAll(".condition-item").length - 1;
              for (let i = 0; i < count; i++) {
                  result[i] = [];
                  if (tilesetOSM) {
                      result[i]["attribute"] =
                          document.getElementById("condition-item-attr-" + i).value ||
                          "height";
                  } else {
                      result[i]["attribute"] =
                          document.getElementById("condition-item-attr-" + i).value ||
                          "_height";
                  }
  
                  result[i]["operator"] =
                      document.getElementById("condition-item-operator-" + i).value ||
                      ">";
                  result[i]["value"] =
                      document.getElementById("condition-item-value-" + i).value || "0";
                  result[i]["color"] =
                      document.getElementById("condition-item-selected-color-" + i)
                          .value || "0";
              }
              return result;
          }
  
          // Handle summarize all conditions
          // Get data from input and make a json data
  
          function isNumeric(n) {
              return !isNaN(parseFloat(n)) && isFinite(n);
          }
  
          let filterConditions;
          let colorConditions;
          const summarizeCondition = (summarizeParam = REMOVE_STYLE_PARAMS_NUM) => {
              getTile();
              filterConditions = "true";
              colorConditions = [];
              const formData = handleFormData("data-form");
              filterArr = getFilterGroup();
              combineArr = getFilterGroupCombine();
              colorArr = getColorCondition();
  
              if (filterArr && filterArr.length > 0) {
                  for (let i = 0; i < filterArr.length; i++) {
                      for (let j = 0; j < filterArr[i].length; j++) {
                          if (matchItem(filterArr[i][j]["attribute"], itemAttributeArr)) {
                              if (filterArr[i][j]["attribute"] && filterArr[i][j]["operator"] && filterArr[i][j]["value"]) {
                                  filterConditions = filterConditions.replace("true", "");
                                  if (filterArr[i][j]["attribute"].includes(":") || filterArr[i][j]["attribute"].includes("#") || filterArr[i][j]["attribute"].includes("_")) {
                                      filterArr[i][j]["attribute"] = "feature['" + filterArr[i][j]["attribute"] + "']"
                                  }
                                  if (filterArr[i][j]["value"]) {
                                      if (isNumeric(filterArr[i][j]["value"])) {
                                          filterConditions +=
                                              "Number($" +
                                              "{" +
                                              filterArr[i][j]["attribute"] +
                                              "})" +
                                              filterArr[i][j]["operator"] +
                                              "" +
                                              filterArr[i][j]["value"] +
                                              "" +
                                              filterArr[i][j][["combine"]];
                                      } else {
                                          if (filterArr[i][j]["operator"] === "===" || filterArr[i][j]["operator"] === "!==") {
                                              filterConditions +=
                                                  "$" +
                                                  "{" +
                                                  filterArr[i][j]["attribute"] +
                                                  "}" +
                                                  filterArr[i][j]["operator"] + "'" +
                                                  "" +
                                                  filterArr[i][j]["value"] + "'" +
                                                  "" +
                                                  filterArr[i][j][["combine"]];
                                          } else {
                                              alert("Filter operator must be === or !== with " + filterArr[i][j]["value"] + ". Please try again!")
                                          }
                                      }
                                  } else {
                                      alert("Please input valid value in Filter Settings")
                                  }
  
                              }
                          } else {
                              alert(filterArr[i][j]["attribute"] + " in Filter Settings is not valid. Please try again!")
  
                          }
  
                      }
                      filterConditions = "(" + filterConditions + ")";
                      if (combineArr[i] && combineArr[i] !== "undefined") {
                          filterConditions = filterConditions.substring(1);
                          filterConditions += combineArr[i] + "(";
                      }
                  }
              }
  
              if (colorArr && colorArr.length > 0) {
                  for (let i = 0; i < colorArr.length; i++) {
                      let colorStr;
  
                      if (matchItem(colorArr[i]["attribute"], itemAttributeArr)) {
                          if (colorArr[i]["attribute"].includes(":") || colorArr[i]["attribute"].includes("#") || colorArr[i]["attribute"].includes("_")) {
                              colorArr[i]["attribute"] = "feature['" + colorArr[i]["attribute"] + "']"
                          }
                          if (colorArr[i]["value"]) {
                              if (isNumeric(colorArr[i]["value"])) {
                                  colorConditions.push([
                                      "Number($" +
                                      "{" +
                                      colorArr[i]["attribute"] +
                                      "})" +
                                      colorArr[i]["operator"] +
                                      "" +
                                      colorArr[i]["value"],
                                      "color('" + colorArr[i]["color"] + "')",
                                  ]);
                              } else {
                                  if (colorArr[i]["operator"] === "===" || colorArr[i]["operator"] === "!==") {
                                      colorConditions.push([
                                          "$" +
                                          "{" +
                                          colorArr[i]["attribute"] +
                                          "}" +
                                          colorArr[i]["operator"] + "'" +
                                          "" +
                                          colorArr[i]["value"] + "'",
                                          "color('" + colorArr[i]["color"] + "')",
                                      ]);
                                  } else {
                                      alert("Color operator must be === or !== with " + colorArr[i]["value"] + ". Please try again!")
                                  }
                              }
                          } else {
                              alert("Please input valid value in Color Settings")
                          }
  
                      }
                      else {
                          alert(colorArr[i]["attribute"] + " in Color Settings is not valid. Please try again!")
                      }
                  }
  
              }
  
              //summarize all filter conditions
  
              let removeStatus = summarizeParam;
              if (filterArr.length === 0) {
                  filterConditions = "true";
              }
  
              if (colorArr.length === 0) {
                  colorConditions = [["true", "color('#FFFFFF')"]];
              }
  
              //passing array to json data
              if (removeStatus !== REMOVE_STYLE_PARAMS_NUM) {
                  styleData = JSON.parse(
                      '{ "show":' +
                      JSON.stringify(filterConditions) +
                      ',"color":{"conditions": ' +
                      JSON.stringify(colorConditions) +
                      "}}"
                  );
                  styleJsonData =
                      "data:text/json;charset=utf8," +
                      encodeURIComponent(JSON.stringify(styleData));
                  //post jsondata to re-earth
                  parent.postMessage({ styleJsonData }, "*");
              } else {
                  var removeData =
                      "data:text/json;charset=utf8," +
                      encodeURIComponent(JSON.stringify(""));
                  styleData = "";
                  styleJsonData =
                      "data:text/json;charset=utf8," +
                      encodeURIComponent(JSON.stringify(""));
                  //post jsondata to re-earth
                  parent.postMessage({ removeData }, "*");
              }
          };
  
          // Apply style function
          let applyBtn = document.getElementById("apply-style-btn");
          applyBtn.addEventListener("click", function (e) {
              e.preventDefault();
              summarizeCondition(APPLY_STYLE_PARAMS_NUM);
          });
  
          //download plugin input data as json file
          function downloadObjectAsJson(exportObj, exportName) {
              var dataStr =
                  "data:text/json;charset=utf-8," +
                  encodeURIComponent(JSON.stringify(exportObj));
              var downloadAnchorNode = document.createElement("a");
              downloadAnchorNode.setAttribute("href", dataStr);
              downloadAnchorNode.setAttribute("download", exportName + ".json");
              document.body.appendChild(downloadAnchorNode); // required for firefox
              downloadAnchorNode.click();
              downloadAnchorNode.remove();
          }
  
          //handle when click export button
          let exportBtn = document.getElementById("export-style-btn");
          exportBtn.addEventListener("click", function (event) {
              event.preventDefault();
              //download style file json
              downloadObjectAsJson(styleData, "download");
          });
  
          function handleFormData(formElmId, objectConvert = false) {
              let formElm = document.getElementById(formElmId);
              const formData = new FormData(formElm);
              const output = [];
              for (const [key, value] of formData) {
                  output[key] = value;
              }
              if (objectConvert === true) {
                  return Object.assign({}, output);
              } else {
                  return output;
              }
          }
  
          // Remove style button function
          // When click return origin UI
          const removeStyleBtn = document.getElementById("remove-style-btn");
          removeStyleBtn.addEventListener("click", function (e) {
              e.preventDefault();
              summarizeCondition(REMOVE_STYLE_PARAMS_NUM);
              //reset form to origin form
  
              var myGroupNodeList = document.querySelectorAll('.filter-wrapper .filter-group-wrapper .filter-group')
              var myGroupOperatorNodeList = document.querySelectorAll('.filter-group-combine-operator-wrapper')
              var myItemNodeList = document.querySelectorAll('.filter-wrapper .filter-group-wrapper .filter-group .filter-item-wrapper .filter-item')
              var myFilterOperatorNodeList = document.querySelectorAll('.filter-wrapper .filter-group-wrapper .filter-group .filter-item-wrapper .filter-item-combine-operator-wrapper')
              var myColorNodeList = document.querySelectorAll('.condition-wrapper .condition-item')
  
              for (let i = 1; i < myGroupNodeList.length; i++) {
                  myGroupNodeList[i].remove()
              }
  
              for (let i = 0; i < myGroupOperatorNodeList.length - 1; i++) {
                  myGroupOperatorNodeList[i].remove()
              }
  
              for (let i = 1; i < myItemNodeList.length; i++) {
                  myItemNodeList[i].remove()
              }
  
              for (let i = 0; i < myFilterOperatorNodeList.length; i++) {
                  myFilterOperatorNodeList[i].remove()
              }
  
              for (let i = 1; i < myColorNodeList.length; i++) {
                  myColorNodeList[i].remove()
              }
  
              //clear form
              var frm = document.getElementById("data-form");
              frm.reset(); // Reset all form data
              return false; // Prevent page refresh
  
  
          });
          // ---------------------------- Handle Minimum-Maximum Plugin --------------------------- //
          let expanded = true;
          let resizeElms = document.querySelectorAll(".resize");
          let closeElm = document.getElementById("title");
          let wapperElm = document.getElementById("wrapper");
          let heightWp = wapperElm.offsetHeight < 818 ? 486 : wapperElm.offsetHeight;
          closeElm.addEventListener("click", handleCloseOpenPopup);
          function handleCloseOpenPopup(e) {
              wapperElm = document.getElementById("wrapper");
              heightWp = wapperElm.offsetHeight < 818 ? 486 : wapperElm.offsetHeight;
              expanded = !expanded
              if (e.target.id == "title" || e.target.classList.contains("title-p") ||
                  (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
                  parent.postMessage({ type: "resize", expanded, heightWp }, "*");
                  if (wapperElm !== null) {
                      wapperElm.classList.remove("height-46");
                  }
                  if (expanded) {
                      document.documentElement.classList.add("extendedh", "extendedv");
                  } else {
                      document.documentElement.classList.remove("extendedh", "extendedv");
                  }
              } else {
                  if (e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
                      if (e.target.closest("#title")) {
                          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
                          if (wapperElm !== null) {
                              wapperElm.classList.remove("height-46");
                          }
                          if (expanded) {
                              document.documentElement.classList.add("extendedh", "extendedv");
                          } else {
                              document.documentElement.classList.remove("extendedh", "extendedv");
                          }
                      }
                  }
              }
          }
          // ---------------------------- Close Handle Minimum-Maximum Plugin --------------------------- //
  
          // ---------------------------- Handle Update IFrame Size --------------------------- //
          function updateIframeSize() {
              let newWrapperElm = document.getElementById("wrapper");
              let heightWp = newWrapperElm.offsetHeight;
              parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          }
  
          // Document Ready functions
          displayColorHex();
          displayColorFromHex()
          createFilterGroup();
          createConditionItem();
          handleOnclickEvents();
          deleteConditionItem();
          getTile();
          // Close Document Ready funtions
      </script>
  </body>
  
  </html>
  `,
    { width: 46, height: 46 }
);

reearth.on("update", send);
send();

function send() {
    reearth.ui.postMessage({
        property: reearth.widget.property,
    });
}

reearth.on("message", (msg) => {
    if (msg.type === "resize") {
        reearth.ui.resize?.(
            msg.expanded ? 46 : 312,
            msg.expanded ? 46 : msg.heightWp,
            msg.expanded ? undefined : false
        );
    }
});

// tileset
const tileset = reearth.layers.find(
    (layer) => layer.type === "tileset"
);
let isOSM;

if (tileset?.property.default.sourceType === "osm") {
    isOSM = true;
} else {
    isOSM = false;
}

const replaceUrl = tileset.property.default.styleUrl
    ? tileset.property.default.styleUrl
    : "";

reearth.on("message", (msg) => {
    const DEFAULT_URL = isOSM
        ? "data:text/json;charset=utf8,%7B%22show%22%3A%22(%24%7Bheight%7D%3E0)%22%2C%22color%22%3A%7B%22conditions%22%3A%5B%5B%22%24%7Bheight%7D%3E0%22%2C%22color('%23FFFFFF')%22%5D%5D%7D%7D"
        : "data:text/json;charset=utf8,%7B%22show%22%3A%22(%24%7B_height%7D%3E0)%22%2C%22color%22%3A%7B%22conditions%22%3A%5B%5B%22%24%7B_height%7D%3E0%22%2C%22color('%23FFFFFF')%22%5D%5D%7D%7D";
    if (msg.styleJsonData) {
        if (tileset) {
            if (msg.styleJsonData === DEFAULT_URL) {
                reearth.layers.overrideProperty(tileset.id, {
                    default: {
                        styleUrl: replaceUrl,
                    },
                });
            } else {
                reearth.layers.overrideProperty(tileset.id, {
                    default: {
                        styleUrl: "",
                    },
                });

                reearth.layers.overrideProperty(tileset.id, {
                    default: {
                        styleUrl: msg.styleJsonData,
                    },
                });
            }
        }
    }
    if (msg.removeData) {
        if (tileset) {
            reearth.layers.overrideProperty(tileset.id, {
                default: {
                    styleUrl: replaceUrl,
                },
            });
        }
    }
});
