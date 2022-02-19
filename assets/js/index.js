/******* 图表 start *******/

/**
 * 生均阅读量走势图
 */
function readingsPerStudentCharts(categoryList, data) {
	Highcharts.chart('readings-per-student-charts', {
		chart: {
			type: 'line',
			style: {
				fontFamily: "",
				fontSize: '12px',
				fontWeight: 'bold',
				color: '#006cee'
			}
		},
		title: {
			text: ''                 // 标题
		},
		subtitle: {
			text: ""
		},
		xAxis: {
			// categories: ['11.2', '12.31', '7.9', '8.5']  // x 轴分类
			categories: categoryList  // x 轴分类
		},
		yAxis: {
			title: {
				text: ''                // y 轴标题
			},

			min: 0,
			minRange: 1
		},
		legend: {
			layout: 'vertical',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [{                              // 数据列
			name: '生均阅读量',                        // 数据列名
			// data: [0, 0, 0, 0]                     // 数据
			data: data
		}],
		responsive: {},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			// backgroundColor: {
			// 	linearGradient: [0, 0, 0, 60],
			// 	stops: [
			// 		[0, '#FFFFFF'],
			// 		[1, '#E0E0E0']
			// 	]
			// },
			borderWidth: 1,
			borderColor: '#AAA'
		},
		exporting: {enabled: false}
	});
}

/**
 * 考级次数走势图
 */
function examTimesCharts(categoryList, data) {
	Highcharts.chart('exam-times-charts', {
		chart: {
			type: 'line',
			style: {
				fontFamily: "",
				fontSize: '12px',
				fontWeight: 'bold',
				color: '#006cee'
			}
		},
		title: {
			text: ''                 // 标题
		},
		subtitle: {
			text: ""
		},
		xAxis: {
			categories: categoryList  // x 轴分类
		},
		yAxis: {
			title: {
				text: ''                // y 轴标题
			},

			min: 0,
			minRange: 1
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [{                              // 数据列
			name: '考级次数',                        // 数据列名
			// data: [0, 0, 0, 0, 0, 0]                     // 数据
			// data: [0, 99, 75, 1]    ,                 // 数据
			data: data                     // 数据
		}],
		responsive: {},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			// backgroundColor: {
			// 	linearGradient: [0, 0, 0, 60],
			// 	stops: [
			// 		[0, '#FFFFFF'],
			// 		[1, '#E0E0E0']
			// 	]
			// },
			borderWidth: 1,
			borderColor: '#AAA'
		},
		exporting: {enabled: false}
	});
}

/**
 * 阅读任务综合报表
 */
function readingActivityCharts(categoryList, readingTaskList, readingActivityList) {
	Highcharts.chart('reading-activity-charts', {
		chart: {
			type: 'line',
			style: {
				fontFamily: "",
				fontSize: '12px',
				fontWeight: 'bold',
				color: '#006cee'
			}
		},
		title: {
			text: ''                 // 标题
		},
		subtitle: {
			text: ""
		},
		xAxis: {
			// categories: ['2022年2月17日', '2022年2月18日', '2022年2月19日', '2022年2月20日', '2022年2月21日', '2022年2月22日']  // x 轴分类
			categories: categoryList  // x 轴分类
		},
		yAxis: {
			title: {
				text: ''                // y 轴标题
			},

			min: 0,
			minRange: 1
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [
			{                              // 数据列
				name: '阅读任务',                        // 数据列名
				// data: [0, 0, 0, 0, 0, 0]                     // 数据
				// data: [0, 99, 75, 1]    ,                 // 数据
				// data: [5, 6, 7, 8]                     // 数据
				data: readingTaskList                   // 数据
			},
			{                              // 数据列
				name: '阅读活动',                        // 数据列名
				// data: [20, 30, 40, 50]                     // 数据
				data: readingActivityList                    // 数据
			}
		],
		responsive: {},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			// backgroundColor: {
			// 	linearGradient: [0, 0, 0, 60],
			// 	stops: [
			// 		[0, '#FFFFFF'],
			// 		[1, '#E0E0E0']
			// 	]
			// },
			borderWidth: 1,
			borderColor: '#AAA'
		},
		exporting: {enabled: false}
	});
}

/**
 * 阅读任务综合报表 最近120天数据
 */
function last120DayCharts(categoryList, readingTaskList, readingActivityList) {
	Highcharts.chart('last-120-day-charts', {
		chart: {
			type: 'line',
			style: {
				fontFamily: "",
				fontSize: '12px',
				fontWeight: 'bold',
				color: '#006cee'
			}
		},
		title: {
			text: ''                 // 标题
		},
		subtitle: {
			text: ""
		},
		xAxis: {
			// categories: ['2022年2月17日', '2022年2月18日', '2022年2月19日', '2022年2月20日', '2022年2月21日', '2022年2月22日']  // x 轴分类
			categories: categoryList  // x 轴分类
		},
		yAxis: {
			title: {
				text: ''                // y 轴标题
			},

			min: 0,
			minRange: 1
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [
			{                              // 数据列
				name: '阅读任务',                        // 数据列名
				// data: [0, 0, 0, 0]                     // 数据
				data: readingTaskList                  // 数据
			},
			{                              // 数据列
				name: '阅读活动',                        // 数据列名
				data: readingActivityList                  // 数据
				// data: [0, 0, 0, 0]                     // 数据
			}
		],
		responsive: {},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			// backgroundColor: {
			// 	linearGradient: [0, 0, 0, 60],
			// 	stops: [
			// 		[0, '#FFFFFF'],
			// 		[1, '#E0E0E0']
			// 	]
			// },
			borderWidth: 1,
			borderColor: '#AAA'
		},
		exporting: {enabled: false}
	});
}

/**
 * 每月一测图表
 */
function monthlyTestCharts(categoryList, data) {

	Highcharts.chart('monthly-test-charts', {
		chart: {
			polar: true,
			type: 'line'
		},
		title: {
			text: ''
			// x: -80
		},
		pane: {
			size: '70%'
		},
		xAxis: {
			categories: categoryList,
			// categories: ['运用', '检索', '评测', '创新','理解'],
			tickmarkPlacement: 'on',
			lineWidth: 0
		},
		yAxis: {
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			min: 0
		},
		tooltip: {
			shared: true,
			pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
		},
		legend: {
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [{
			name: '每月一测',
			// data: [4, 4, 3, 4, 5],
			data: data,
			pointPlacement: 'on'
		}]
	});
}

/******* 图表 end *******/

/******* 图表网络请求 start *******/

/**
 * 生均阅读量走势图网络请求
 */
function getReadingsPerStudentChartsData() {
	$.ajax({
		url: "http://localhost:3000/getReadingsPerStudentChartsData",
		data: {
			grade: getAjaxData("grade"),
			type: getAjaxData("aveStuType"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			readingsPerStudentCharts(data.category, data.data)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/**
 * 考级次数走势图网络请求
 */
function getExamTimesChartsData() {
	$.ajax({
		url: "http://localhost:3000/getExamTimesChartsData",
		data: {
			grade: getAjaxData("grade"),
			type: getAjaxData("aveStuType"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			examTimesCharts(data.category, data.data)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/**
 * 阅读任务综合报表网络请求
 */
function getReadingActivityChartsData() {
	$.ajax({
		url: "http://localhost:3000/getReadingActivityChartsData",
		data: {
			grade: getAjaxData("grade"),
			type: getAjaxData("readingComplexType"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			readingActivityCharts(data.categories, data.readingBookList, data.readingActivityList)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});

}

/**
 * 120天数据网络请求
 */
function getLast120DayChartsData() {
	$.ajax({
		url: "http://localhost:3000/getLast120DayChartsData",
		data: {
			grade: getAjaxData("grade"),
			type: getAjaxData("readingComplexType"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			last120DayCharts(data.categories, data.readingBookList, data.readingActivityList)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});

}


function getMonthlyTestChartsDate() {
	$.ajax({
		url: "http://localhost:3000/getMonthlyTestChartsDate",
		data: {
			grade: getAjaxData("grade"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			monthlyTestCharts(data.category, data.data)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/******* 图表网络请求 end *******/


/**
 * 班级信息获取
 */
function getGradeList() {
	var gradeListEl = $(".grade-select") // 选择器元素
	var gradeListItemStr = "" // 每一个年级字符串
	$.ajax({
		url: "http://localhost:3000/getGradeList",
		data: {},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (gradeList) {
			$.each(gradeList, function (i, item) {
				gradeListItemStr += '<option value="grade_' + i + '">' + item + '</option>'
			})
			gradeListEl.html(gradeListItemStr)
			gradeListItemStr = ""
			// currentSelectedVal = $(".grade-select option:selected")
			// console.log(currentSelectedVal.text(),currentSelectedVal.val(),"网络请求后获取的select的值");

			//  获取到班级之后 开始初始化页面中的各种数据
			init()
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "，在：", jqXHR)
		}
	});
}

/**
 * 顶部考级等信息分类数据获取
 */
function getInfoCategory() {
	var infoCategoryListEl = $(".info-category-list")
	var categoryInfoItemStr = ""
	var categoryTitleList = ["本月人均考级本数", "本月考级次数", "本月考级任务发布数", "本月考级参与率", "本月考级通过率", "本月阅读活动举办数"]


	// var examBookNumEl = $("exam-book-num") //本月人均考级本数
	// var examTotalEl = $("exam-total") //本月考级次数
	// var examPublishTotalEl = $("exam-publish-total") //本月考级任务发布数
	// var examParticipateRateEl = $("exam-participate-rate") //本月考级参与率
	// var examPassRateEl = $("exam-pass-rate") //本月考级通过率
	// var readingEventConductTotalEl = $("reading-event-conduct-total") //本月阅读活动举办数

	var categoryInfoMap = [
		{
			imgSrcName: "down",
			className: "proportion-num-down",
			symbol: "-"
		}, {
			imgSrcName: "up",
			className: "proportion-num-up",
			symbol: "+"
		}
	]

	$.ajax({
		url: "http://localhost:3000/getInfoCategory",
		data: {
			grade: getAjaxData("grade"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (categoryList) {
			$.each(categoryList, function (i, item) {
				categoryInfoItemStr +=
					'	<div class="info-cate-item ">' +
					'		<p class="item-title">' + categoryTitleList[i] + '</p>' +
					'		<!--具体数值和 上升下降-->' +
					'		<div class="item-body">' +
					'			<!--具体数值-->' +
					'			<div class="body-num">' + item.count + '</div>' +
					'			<!--百分比和图标-->' +
					'			<div class="proportion-wrap">' +
					'				<div class="proportion-img">' +
					'					<img src="./assets/images/img_' + categoryInfoMap[item.ratioType].imgSrcName + '.png" alt="">' +
					'				</div>' +
					'				<div class="proportion-num  ' + categoryInfoMap[item.ratioType].className + '">' + categoryInfoMap[item.ratioType].symbol + item.ratioNum + '%</div>' +
					'			</div>' +
					'		</div>' +
					'	</div>'
			})
			infoCategoryListEl.html(categoryInfoItemStr)
			categoryInfoItemStr = ""
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/**
 * 生均阅读量 表格的数据获取
 */
function getReadingsPerStudentTab() {
	var readingStudentListEl = $(".reading-student-list")
	var readingStudentListItemStr = ""
	$.ajax({
		url: "http://localhost:3000/getReadingsPerStudentTabData",
		data: {
			grade: getAjaxData("grade"),
			type: getAjaxData("aveStuType"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			if (data.length === 0) {
				domUtils.noDateEl(readingStudentListEl)
				return
			}
			$.each(data, function (i, item) {
				readingStudentListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + dateUtils.dateFormat(item.time, "yyyy.MM.dd") + '-' + dateUtils.dateFormat(item.endTime, "yyyy.MM.dd") + '</div>' +
					'		<div class="x-item-content" title="' + item.grade + '">' + item.grade + '</div>' +
					'		<div class="x-item-content" title="' + item.readingNum + '">' + item.readingNum + '</div>' +
					'		<div class="x-item-content" title="' + item.examNum + '">' + item.examNum + '</div>' +
					'	</div>'
			})
			readingStudentListEl.html(readingStudentListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/**
 * 阅读任务综合报表 表格的数据获取
 */
function getTaskData() {
	var readingTaskList = $(".reading-task-list")
	var readingActivityList = $(".reading-activity-list")

	$.ajax({
		url: "http://localhost:3000/readingTask",
		data: {
			grade: getAjaxData("grade"),
			type: getAjaxData("readingComplexType"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			if (getAjaxData("readingComplexType") === "0") {
				readingTaskList.parents(".x-table-list").show();
				readingActivityList.parents(".x-table-list").hide();
				readingTaskList.html(generateListItem(data))
			}
			if (getAjaxData("readingComplexType") === "1") {
				readingTaskList.parents(".x-table-list").hide();
				readingActivityList.parents(".x-table-list").show();
				readingActivityList.html(generateListItem(data))
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/**
 * 生成阅读综合报表的表格内容
 * @param data
 * @returns {string}
 */
function generateListItem(data) {
	var monthMap = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]

	var listItemStr = ""
	$.each(data, function (i, item) {
		listItemStr +=
			'	<div class="x-item">' +
			'		<div class="x-item-content">' + monthMap[parseInt(dateUtils.dateFormat(item.time, "MM月")) - 1] + '</div>' +
			'		<div class="x-item-content" title="' + item.grade + '">' + item.grade + '</div>' +
			'		<div class="x-item-content" title="' + item.taskNum + '">' + item.taskNum + '</div>' +
			'		<div class="x-item-content">' + (item.participationRate * 100).toFixed(2) + '%</div>' +
			'		<div class="x-item-content">' + (item.passingRate * 100).toFixed(2) + '%</div>' +
			'	</div>'

	})
	return listItemStr
}


/**
 * 活动热力榜数据获取
 */
function getActivityHotRank() {
	var activityHotListEl = $(".activity-hot-list")
	var activityHotListItemStr = ""

	$.ajax({
		url: "http://localhost:3000/activityHotRank",
		data: {
			grade: getAjaxData("grade"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			if (data.length === 0) {
				domUtils.noDateEl(activityHotListEl)
				return
			}
			$.each(data, function (i, item) {
				activityHotListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + item.rank + '</div>' +
					'		<div class="x-item-content" title="' + item.activityName + '">' + item.activityName + '</div>' +
					'		<div class="x-item-content" title="' + item.grade + '">' + item.grade + '</div>' +
					'		<div class="x-item-content">' + (item.passingRate * 100).toFixed(2) + '%</div>' +
					'		<div class="x-item-content" title="' + item.works + '">' + item.works + '</div>' +
					'	</div>'
			})
			activityHotListEl.html(activityHotListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});

}

/**
 * 学校排名数据获取
 */
function getSchoolRank() {
	var schoolRankingListEl = $(".school-ranking-list")
	var schoolRankingListItemStr = "";

	$.ajax({
		url: "http://localhost:3000/schoolRank",
		data: {
			grade: getAjaxData("grade"),
			dateTime: getAjaxData("dateTime")
		},
		type: "POST",
		async: true,
		dataType: "json",
		success: function (data) {
			if (data.length === 0) {
				domUtils.noDateEl(schoolRankingListEl)
				return
			}
			$.each(data, function (i, item) {
				schoolRankingListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + item.rank + '</div>' +
					'		<div class="x-item-content" title="' + item.schoolName + '">' + item.schoolName + '</div>' +
					'		<div class="x-item-content" title="' + item.aveReadingBookCount + '">' + item.aveReadingBookCount + '</div>' +
					'	</div>'
			})
			schoolRankingListEl.html(schoolRankingListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});

}

/**
 * 点击切换生均和阅读任务与阅读活动
 */
function handleToggleTimeAndTaskTypeBtnClick() {

	//生均信息切换
	$(".average-student-type").on("click", ".toggle-item", function () {
		$(this).addClass("active-toggle-item").siblings().removeClass("active-toggle-item") //切换活跃类
		var toggleTypeStr = $(this).attr("data-toggle-type") // 获取当前点击的是哪一个项
		$(this).parents(".toggle-time").attr("data-aveStuType", $(this).index()) //设置类型
		toggleTypeMethods[toggleTypeStr]() //点击时候切换对应的数据
	})
	//阅读信息切换
	$(".reading-type").on("click", ".toggle-item", function () {
		$(this).addClass("active-toggle-item").siblings().removeClass("active-toggle-item") //切换活跃类
		var toggleTypeStr = $(this).attr("data-toggle-type") // 获取当前点击的是哪一个项
		$(this).parents(".toggle-time").attr("data-readingComplexType", $(this).index())//设置类型
		toggleTypeMethods[toggleTypeStr]() //点击时候切换对应的数据
	})
}

/**
 * 切换获取生均数据 和阅读综合数据的集合
 */
var toggleTypeMethods = {
	last30Days: function () {
		console.info("开始获取最近三十天的数据")
		getReadingsPerStudentChartsData()
		getExamTimesChartsData()
		getReadingsPerStudentTab()
		console.info("数据已更新")
	},
	lastFourMonth: function () {
		console.info("开始获取最近四个月的数据")
		getReadingsPerStudentChartsData(1)
		getExamTimesChartsData(1)
		getReadingsPerStudentTab(1)
		console.info("数据已更新")
	},
	readingTask: function () {
		console.info("开始获取阅读任务的数据")
		getReadingActivityChartsData()
		getLast120DayChartsData()
		getTaskData()
		console.info("数据已更新")
	},
	readingActivity: function () {
		console.info("开始获取阅读活动的数据")
		getReadingActivityChartsData()
		getLast120DayChartsData()
		getTaskData()
		console.info("数据已更新")
	}
}

window.onload = function () {
	initOnce()

	/**
	 * 只初始化一次的信息
	 */
	function initOnce() {
		getGradeList()
		initProperties()
		handleToggleTimeAndTaskTypeBtnClick()// 生均图和阅读图的切换功能
		handleDialogBtnClick()
		handleShowDialogBtnClick()
		handleExportFileBtnClick()
		$(".reading-activity-list").parents(".x-table-list").hide()
		handleIptChange()
		handleGradeSelectChange()
	}
}

/**
 * 进入页面初始化内容
 */
function init() {

	//分类信息获取
	getInfoCategory()

	//生均和考级图，底部表格表数据获取
	getReadingsPerStudentChartsData()
	getExamTimesChartsData()
	getReadingsPerStudentTab()

	//阅读任务 阅读活动，底部表格表数据获取
	getReadingActivityChartsData()
	getLast120DayChartsData()
	getTaskData()

	//活动热力榜
	getActivityHotRank()

	//每月一侧
	getMonthlyTestChartsDate()

	//学校排名
	getSchoolRank()
}

/**
 * 初始化需要赋值的属性
 */
function initProperties() {
	// currentDate = dateUtils.dateFormat(dateUtils.getTimeStamp(), "yyyy-MM")
	$(".month-selected").val(dateUtils.dateFormat(dateUtils.getTimeStamp(), "yyyy-MM"))
}

/**
 * 日期选择器内容变化
 */
function handleIptChange() {
	$(".month-selected").on("change", function () {
		console.info("开始获取" + $(this).val() + "的数据")
		init() // 开始根据重新选择的日期做网络请求
		console.info("数据已更新")
	});
}

/**
 * 班级选择器被选择
 */
function handleGradeSelectChange() {
	$(".grade-select").on("change", function () {
		console.info("开始获取" + $(this).val() + "的数据");
		init() //开始获取选择的班级的数据
		console.info("数据已更新");
	})
}

/**
 * dialog关闭事件
 */
function handleDialogBtnClick() {
	$(".x-dialog-close-btn").on("click", function () {
		$(this).parents(".x-dialog-mask").toggle();
	})
}

/**
 * 显示对话框
 */
function handleShowDialogBtnClick() {
	$(".indicator-desc").on("click", function () {
		$(".x-dialog-mask").toggle();
	})
}

/**
 * 导出文件按钮被点击
 */
function handleExportFileBtnClick() {
	$(".export-file-btn").on("click", function () {
		//todo 导出文件按钮被点击
	})
}


/**
 * 获取指定类型的数据
 * 年级：grade
 * 日期时间：dateTime
 * 生均信息：aveStuType
 * 阅读综合类型：readingComplexType
 * @param dataTypeStr 传入获取数据的指定字符串
 * @returns {*} 返回根据传入字符串获取的结果
 */
function getAjaxData(dataTypeStr) {
	if (dataTypeStr === 'grade') return $(".grade-select option:selected").val()
	if (dataTypeStr === 'dateTime') return $(".month-selected").val()
	if (dataTypeStr === "aveStuType") return $(".average-student-type").attr("data-aveStuType")
	if (dataTypeStr === "readingComplexType") return $(".reading-type").attr("data-readingComplexType")
}

