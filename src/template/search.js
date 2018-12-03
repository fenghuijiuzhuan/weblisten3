<div class="layui-card">
  {{# if(d.title){ }}
    <div class="layui-card-header">{{ d.title }}</div>
  {{# } }}
  <div class="layui-card-body">
    <div class="wping-searchform layui-form-item layui-form">
      <form class="layui-form" lay-filter="searchbar" action="">
        {{# if(d.select){ }}
          <div class="layui-inline">
          {{# layui.each(d.select, function(index, item) { }}
            {{# if(item.name){ }}
            <label class="layui-form-label">{{item.name}}</label>
            {{# } }}
            <div class="layui-input-inline" style="">
              <select name="select{{index}}">
              {{# layui.each(item.content, function(_index, _item) { }}
                <option value="{{_item.value}}">{{_item.text}}</option>
              {{# }) }}
              </select>
            </div>
          {{# }) }}
          </div>
        {{# } }}

        {{# if(d.date){ }}
          {{# if(d.date.isArea){ }}
            <div class="layui-inline">
              <label class="layui-form-label">{{d.date.dateStart.name}}</label>
              <div class="layui-input-inline">
                <input type="text" name="date_min" id="{{d.date.dateStart.id}}" placeholder="{{d.date.dateStart.placeholder}}" autocomplete="off" class="layui-input">
              </div>
              <div class="layui-form-mid">{{d.date.dateEnd.name}}</div>
              <div class="layui-input-inline">
                <input type="text" name="date_max" id="{{d.date.dateStart.id}}" placeholder="{{d.date.dateEnd.placeholder}}" autocomplete="off" class="layui-input">
              </div>
            </div>
          {{# }else{ }}
          <div class="layui-inline">
            {{# if(d.date.dateStart.name){ }}
            <label class="layui-form-label">{{d.date.dateStart.name}}</label>
            {{# } }}
            <div class="layui-input-inline">
              <input type="text" name="date" class="layui-input" id="{{d.date.dateStart.findDateStart}}" placeholder="{{d.date.dateStart.placeholder}}">
            </div>
          </div>
          {{# } }}
        {{# } }}

        {{# if(d.search){ }}
        <div class="layui-inline">
          {{# if(d.search.name){ }}
          <label class="layui-form-label">{{d.search.name}}</label>
          {{# } }}
          <div class="layui-input-inline">
            <input type="text" name="key"  placeholder="{{d.search.placeholder}}" autocomplete="off" id="{{d.search.id}}" class="layui-input">
          </div>
        </div>
        {{# } }}

        {{# if(d.check){ }}
        <div class="layui-inline">
          <div class="layui-input-inline">
            <input type="checkbox" name="fenkl" title="{{d.check.name}}" lay-skin="primary" {{ d.check.status ? 'checked' : "" }}></input>
          </div>
        </div>
        {{# } }}

        <div class="layui-inline">
          {{# layui.each(d.btn, function (index, item) { }}
            {{ item }}
          {{# }) }}
        </div>
      </form>
    </div>
  </div>
</div>
